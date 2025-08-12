import UserCard from 'flarum/forum/components/UserCard';
import ItemList from 'flarum/common/utils/ItemList';

export default class SessionUserCard extends UserCard {
    infoItems() {
        return new ItemList();
    }
}