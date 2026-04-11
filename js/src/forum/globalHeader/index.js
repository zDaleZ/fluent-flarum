import ForumApplication from 'flarum/forum/ForumApplication';
import HeaderSearch from './headerSearch';
import primaryCombineControls from './backButtonAndHomeLink';
import addTestButtons from './test';
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
        items.add('back', <primaryCombineControls.backButton />, -50);
        items.add('homelink', <primaryCombineControls.homeLink />, -100);
    });

    extend(HeaderSecondary.prototype, 'items', function (items) {
        items.remove('search');
    });

    addCollapsible(HeaderSecondary, null);
    addTestButtons();
}
