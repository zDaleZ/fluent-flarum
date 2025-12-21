import app from "flarum/forum/app";
import Dropdown from "flarum/common/components/Dropdown";
import { extend } from "flarum/common/extend";

export default function hookDropdown() {
  extend(Dropdown.prototype, 'oncreate', function () {
    this.$().on('hide.bs.dropdown', (e) => {
      const childrenDropdown = this.$().children('.open.Dropdown');
      console.log(childrenDropdown);
      if (childrenDropdown.length) return false;
    });

    this.$().on('hidden.bs.dropdown', (e) => {
      const parentDropdown = this.$().parents('.Dropdown');
      
      console.log('hi');
    });
  });
}