import { extend, override } from 'flarum/common/extend';
import listItems from 'flarum/common/helpers/listItems';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import ItemList from 'flarum/common/utils/ItemList';
import { debounce } from 'flarum/common/utils/throttleDebounce';

import MoreDropdown from './moreDropdown';

// It's used by processItems(), to prevent building the same class again and again...
const componentPool = new WeakMap();

let container = document.body.querySelector('#header .container');

let titlebarVisible = [false, false];

// Window Controls Overlay is visible? Then `geometrychange` event will fire.
function ifNoNeedToProcess() {
    return navigator.windowControlsOverlay && navigator.windowControlsOverlay.visible;
}

/**
 *
 * @param { HeaderSecondary } element
 * @param { Number } direction
 */

export default function addCollapsible(element, direction) {
    override(element.prototype, 'view', function () {
        const withMoreDropdown = this.items();

        withMoreDropdown.add(
            'more',
            <MoreDropdown parent={this}>{direction ? processItems(this.items()) : processItems(this.items()).slice(2)}</MoreDropdown>,
            direction ? Infinity : -Infinity
        );

        return <ul className="Header-controls">{listItems(withMoreDropdown.toArray())}</ul>;
    });

    extend(element.prototype, 'oncreate', function () {
        const helper = new collapsibleHelper(this.element, direction);
        this.helper = helper;
        window.addEventListener(
            'resize',
            debounce(200, function () {
                if (ifNoNeedToProcess()) return;
                helper.layout();
            }),
            { signal: helper.signal }
        );

        if (navigator.windowControlsOverlay) {
            navigator.windowControlsOverlay.addEventListener(
                'geometrychange',
                debounce(200, function (e) {
                    helper.layout(e);
                }),
                { signal: helper.signal }
            );
        }
    });

    extend(element.prototype, 'onbeforeremove', function () {
        this.helper.unregister();
    });
}

class collapsibleHelper {
    #abort = new AbortController();

    /**
     * @constructor
     * @param { HTMLElement } element
     */

    constructor(element, direction) {
        this.element = element;
        this.direction = direction;
        this.showChoice = false;
        this.signal = this.#abort.signal;

        // emulate an event, so the layout can initialize well for titlebar.
        if (navigator.windowControlsOverlay) {
            const e = { visible: navigator.windowControlsOverlay.visible, titlebarAreaRect: navigator.windowControlsOverlay.getTitlebarAreaRect() };
            this.layout(e);
            return;
        }

        this.layout();
    }

    unregister() {
        this.#abort.abort();
    }

    layout(e) {
        if (window.app.screen() == 'phone') {
            this.element.style = '';
            return;
        }

        if (e) this.clearChoiceItem();

        if (e && (e.visible || e.visible != titlebarVisible[this.direction])) {
            const needRestore = e.visible != titlebarVisible[this.direction] && !e.visible;
            titlebarVisible[this.direction] = e.visible;

            const containerBounds = container.getBoundingClientRect();

            if (this.direction == 0) {
                const availableMargin = containerBounds.left;
                const unsafeTitlebarArea = e.titlebarAreaRect.x;

                if (availableMargin < unsafeTitlebarArea) {
                    this.element.style.marginLeft = `${unsafeTitlebarArea - availableMargin}px`;
                }

                if (needRestore || availableMargin >= unsafeTitlebarArea) {
                    this.element.style.marginLeft = '';
                }
            }

            if (this.direction == 1) {
                const windowWidth = window.innerWidth;
                const availableMargin = windowWidth - containerBounds.right;
                const unsafeTitlebarArea = windowWidth - e.titlebarAreaRect.x - e.titlebarAreaRect.width;

                if (availableMargin < unsafeTitlebarArea) {
                    this.element.style.marginRight = `${unsafeTitlebarArea - availableMargin}px`;
                }

                if (needRestore || availableMargin >= unsafeTitlebarArea) {
                    this.element.style.marginRight = '';
                }
            }
        }

        const children = Array.from(this.element.children);
        children.forEach((element) => {
            element.classList.remove('hidden-item');
        });
        const domRects = children.map((e) => e.getBoundingClientRect());

        const parentRect = this.element.getBoundingClientRect();

        const parentWidth = Math.floor(parentRect.width);
        let childrenWidth = domRects.reduce((accumulator, currentValue) => accumulator + Math.ceil(currentValue.width), 0);

        const menuItems = children.find((element) => element.className == 'item-more');

        menuItems.querySelectorAll('ul>li').forEach((element) => {
            element.style.display = '';
        });

        if (parentWidth >= childrenWidth - menuItems.getBoundingClientRect().width) {
            menuItems.classList.add('hidden-item');
            return;
        }

        (this.direction ? children.slice(1) : children.slice(2, -1).reverse()).every((element, index) => {
            if (element.classList.contains('chosen-item')) return parentWidth < childrenWidth;

            menuItems.querySelector(`.${element.className}`).style.display = 'block';
            element.classList.add('hidden-item');
            childrenWidth -= domRects[index + 1].width;
            return parentWidth < childrenWidth;
        });
    }

    clearChoiceItem() {
        Array.from(this.element.children).forEach((element) => {
            element.classList.remove('chosen-item');
        });
    }
}

/**
 *
 * @param { ItemList } items
 */
function processItems(items) {
    Object.keys(items.toObject()).forEach((itemName) => {
        const item = items.get(itemName);

        item.attrs.onclick = null;

        if (!('getButton' in item.tag.prototype)) return;

        let buttonOfComponent = componentPool.get(item.tag);

        if (buttonOfComponent) {
            items.setContent(itemName, buttonOfComponent.component(item.attrs, item.children));
            return;
        }

        // Build a new component in place
        buttonOfComponent = class extends item.tag {
            view(vnode) {
                const button = this.getButton(vnode.children);
                button.attrs.className += ' hasIcon';
                button.attrs.onclick = null;
                return button;
            }
        };

        items.setContent(itemName, buttonOfComponent.component(item.attrs, item.children));

        componentPool.set(item.tag, buttonOfComponent);
    });

    return items.toArray();
}
