import HeaderSearch from "./headerSearch";
import primaryCombineControls from "./backButtonAndHomeLink";
import HeaderPrimary from "flarum/forum/components/HeaderPrimary";
import HeaderSecondary from "flarum/forum/components/HeaderSecondary";
import { extend } from "flarum/common/extend";

let isAdded = false;

export default function hookGlobalHeader() {
    const headerSearch = document.createElement('div');

    headerSearch.id = 'header-search';
    headerSearch.className = 'Header-search';

    document.getElementById('header-secondary').before(headerSearch);

    extend(HeaderSecondary.prototype, 'items', function (items) {
        items.remove('search');

        if (!isAdded) {
            m.mount(headerSearch, HeaderSearch);

            isAdded = true;
        }
    });

    extend(HeaderPrimary.prototype, 'items', function (items) {
        items.add('back', <primaryCombineControls.backButton />, -50);
        items.add('homelink', <primaryCombineControls.homeLink />, -100);
    });
}