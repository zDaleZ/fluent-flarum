import { extend, override } from 'flarum/common/extend';
import listItems from 'flarum/common/helpers/listItems';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import ItemList from 'flarum/common/utils/ItemList';
import { debounce } from 'flarum/common/utils/throttleDebounce';

import MoreDropdown from './moreDropdown';

// It's used by processItems(), to prevent building the same class again and again...
const componentPool = new WeakMap();

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
                helper.layout();
            }),
            { signal: helper.signal }
        );
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

        this.layout();
    }

    unregister() {
        this.#abort.abort();
    }

    layout() {
        const children = Array.from(this.element.children);
        children.forEach((element) => {
            element.classList.remove('hidden-item');
        });
        const domRects = children.map((e) => e.getBoundingClientRect());

        const parentRect = this.element.getBoundingClientRect();

        const parentWidth = parentRect.width;
        let childrenWidth = domRects.reduce((accumulator, currentValue) => accumulator + currentValue.width, 0);

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
