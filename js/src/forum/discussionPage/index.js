import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import DiscussionLoadingItem from './loadingUX';
import ItemList from 'flarum/common/utils/ItemList';
import { override } from 'flarum/common/extend';

export default function hookDiscussionPageLoading() {
    override(DiscussionPage.prototype, 'loadingItems', function () {
        const items = new ItemList();

        items.add('loadingPlaceholder', <DiscussionLoadingItem />, 100);

        return items;
    });
}