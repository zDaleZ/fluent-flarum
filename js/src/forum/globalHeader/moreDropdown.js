import Dropdown from "flarum/common/components/Dropdown";

export default class moreDropdown extends Dropdown {
  static initAttrs(attrs) {
    attrs.contents ||= null;
  }

  view(vnode) {
    const value = super.view(vnode);
    console.log(value);
    debugger;

    return value;
  }
}