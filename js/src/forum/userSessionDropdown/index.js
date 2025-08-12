import app from 'flarum/forum/app';
import SessionUserCard from './SessionUserCard';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';
import { extend } from 'flarum/common/extend';

export default function addUserCardToSessionDropdown() {
    extend(SessionDropdown.prototype, 'items', function (items) {
        items.add(
            'SessionUserCard',
            <SessionUserCard
                user={app.session.user}
                className="Hero UserHero"
                editable={app.session.user.canEdit()}
                controlsButtonClassName="Button" />,
            150
        );
    });
}