import app from 'flarum/forum/app';
import Search from 'flarum/forum/components/Search';
import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';

export default class HeaderSearch extends Component {
    view() {
        return <ul className="Header-controls">{listItems(this.items().toArray())}</ul>;
    }

    /**
     * Build an item list for the controls.
     *
     * @return {ItemList<import('mithril').Children>}
     */
    items() {
        const items = new ItemList();

        items.add(
            'search',
            Search.component({
                state: app.search,
            }),
            30
        );

        return items;
    }
}
