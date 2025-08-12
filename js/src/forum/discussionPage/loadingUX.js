import app from 'flarum/forum/app';

import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import Component from 'flarum/common/Component';

export default class DiscussionLoadingItem extends Component {
    view() {
        return <div className="container loading">{this.mainContent().toArray()}</div>;
    }

    mainContent() {
        const items = new ItemList();

        items.add('sidebar', this.sidebar(), 100);

        items.add(
            'poststream',
            <div className="DiscussionPage-stream">
                <LoadingIndicator size="large" />
                <h3>{app.translator.trans('core.lib.loading_indicator.accessible_label')}</h3>
            </div>,
            10
        );

        return items;
    }

    sidebar() {
        return (
            <nav className="DiscussionPage-nav">
                <ul>{listItems(this.sidebarItems().toArray())}</ul>
            </nav>
        );
    }

    sidebarItems() {
        const items = new ItemList();

        items.add('placeholder', <div className="placeholder" />, -100);

        return items;
    }
}