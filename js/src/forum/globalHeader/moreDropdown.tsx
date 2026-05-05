import Dropdown, { IDropdownAttrs } from 'flarum/common/components/Dropdown';
import icon from 'flarum/common/helpers/icon';
import type Mithril from 'mithril';

export interface IMoreDropdown extends IDropdownAttrs {
    className?: string;
    /** The parent of this menu. */
    parent?: Object;
}

export default class MoreDropdown<CustomAttrs extends IMoreDropdown = IMoreDropdown> extends Dropdown<CustomAttrs> {
    static initAttrs(attrs: IMoreDropdown) {
        attrs.className ||= 'MoreDropdown';
        attrs.buttonClassName ||= 'Button Button--flat hasIcon';
        attrs.icon ||= 'fas fa-ellipsis-h';

        super.initAttrs(attrs);
    }

    getMenu(items: Mithril.Vnode<any, any>[]) {
        return (
            <ul className={'Dropdown-menu dropdown-menu ' + this.attrs.menuClassName} onclick={this.menuClick.bind(this)}>
                {items}
            </ul>
        );
    }

    getButtonContent(children: Mithril.ChildArray): Mithril.ChildArray {
        return [this.attrs.icon ? icon(this.attrs.icon, { className: 'Button-icon' }) : '', <span className="Button-label">{this.attrs.label}</span>];
    }

    menuClick(e: MouseEvent) {
        // Do nothing if the menu itself is clicked
        if (e.target == e.currentTarget) return;

        const clickedItem = e.target as HTMLElement;
        const id = Array.from(clickedItem.closest('li')!.classList).find((value: String) => value.startsWith('item'))!;

        const parentContainer = this.element.closest('.Header-controls')!;
        const target = parentContainer.querySelector(`:scope > .${id}`)!;
        const toBeClicked = target.querySelector('a, button')! as HTMLElement;

        // @ts-ignore
        this.attrs.parent.helper.clearChoiceItem();

        if (toBeClicked.tagName == 'BUTTON') {
            target.classList.remove('hidden-item');
            target.classList.add('chosen-item');
        }

        // @ts-ignore
        this.attrs.parent.helper.layout();

        setTimeout(() => toBeClicked.click(), 0);
    }
}
