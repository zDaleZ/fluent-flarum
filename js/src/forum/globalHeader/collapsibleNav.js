import { extend, override } from "flarum/common/extend";
import listItems from "flarum/common/helpers/listItems";

import moreDropdown from "./moreDropdown";
import Dropdown from "flarum/common/components/Dropdown";
import HeaderSecondary from "flarum/forum/components/HeaderSecondary";

/**
 * 
 * @param { HeaderSecondary } element 
 * @param { String } direction 
 */

export default function addCollapsible(element, direction) {
  override(element.prototype, 'view', function () {
    const withMoreDropdown = this.items();

    withMoreDropdown.add('more', <Dropdown
      icon="fas fa-ellipsis-h"
      caretIcon=""
      buttonClassName="Button Button--flat hasIcon">
      {this.items().toArray()}
    </Dropdown>, Infinity);

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
  constructor(element) {
    this.element = element;

    this.layout();
  }

  unregister() {}

  layout() {
    const children = Array.from(this.element.children);
    children.forEach((element) => {
      element.style.display = "";
    });
    const domRects = children.map((e) => e.getBoundingClientRect());

    const parentRect = this.element.getBoundingClientRect();

    const parentWidth = parentRect.width;
    let childrenWidth = domRects.reduce((accumulator, currentValue) => accumulator + currentValue.width, 0);

    if (parentWidth < childrenWidth) {
      children.slice(1).every((element, index) => {
        element.style.display = "none";
        childrenWidth -= domRects[index + 1].width;
        return parentWidth < childrenWidth;
      });
    };
  }
}