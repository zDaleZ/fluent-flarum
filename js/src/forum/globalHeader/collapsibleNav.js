import { extend, override } from 'flarum/common/extend';
import listItems from 'flarum/common/helpers/listItems';

import MoreDropdown from './moreDropdown';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import ItemList from 'flarum/common/utils/ItemList';

/**
 *
 * @param { HeaderSecondary } element
 * @param { String } direction
 */

export default function addCollapsible(element, direction) {
    override(element.prototype, 'view', function () {
        const withMoreDropdown = this.items();

        withMoreDropdown.add(
            'more',
            <MoreDropdown parent={this}>
                {processItems(this.items())}
            </MoreDropdown>,
            Infinity
        );

        return <ul className="Header-controls">{listItems(withMoreDropdown.toArray())}</ul>;
    });

    extend(element.prototype, 'oncreate', function () {
        this.helper = new collapsibleHelper(this.element);
    });
}

class collapsibleHelper {
    /**
     * @constructor
     * @param { HTMLElement } element
     */
    constructor(element, direction) {
        this.element = element;
        this.direction = direction;
        this.showChoice = false;

        this.layout();
    }

    unregister() {}

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

        if (parentWidth >= (childrenWidth - menuItems.getBoundingClientRect().width)) {
            menuItems.classList.add('hidden-item');
            return;
        }

        children.slice(1).every((element, index) => {
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

        // Build a new component in place
        class buttonOfComponent extends item.tag {
            view(vnode) {
                const button = this.getButton(vnode.children);
                button.attrs.className += ' hasIcon';
                button.attrs.onclick = null;
                return button;
            }
        }

        items.setContent(itemName, buttonOfComponent.component(item.attrs, item.children));
    });

    return items.toArray();
}
