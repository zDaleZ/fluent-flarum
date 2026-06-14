import ForumApplication from 'flarum/forum/ForumApplication';
import HeaderSearch from './headerSearch';
import * as backAndHome from './backButtonAndHomeLink';
// import addTestButtons from './test';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import { extend } from 'flarum/common/extend';
import addCollapsible from './collapsibleNav';

export default function hookGlobalHeader() {
    const headerSearch = document.createElement('div');

    headerSearch.id = 'header-search';
    headerSearch.className = 'Header-search';

    document.getElementById('header-secondary').before(headerSearch);

    extend(ForumApplication.prototype, 'mount', function () {
        m.mount(headerSearch, HeaderSearch);
    });

    extend(HeaderPrimary.prototype, 'items', function (items) {
        items.add('back', <backAndHome.backButton />, Infinity);
        items.add('homelink', <backAndHome.homeLink />, Infinity);
    });

    extend(HeaderSecondary.prototype, 'items', function (items) {
        items.remove('search');
    });

    // 0: from right, 1: from left
    addCollapsible(HeaderPrimary, 0);
    addCollapsible(HeaderSecondary, 1);
    // addTestButtons();
}
