import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LinkButton from 'flarum/common/components/LinkButton';

function backUrl() {
    if (app?.history?.canGoBack()) return app?.history?.backUrl();
}

class backButtonComponent extends Component {
    view() {
        return (
            <LinkButton
                className="Button Navigation-back Button--icon Button--flat"
                href={backUrl()}
                icon="fas fa-arrow-left"
                aria-label={app?.previous?.title}
                disabled={!app?.history?.canGoBack()}
                onclick={(e) => {
                    if (e.shiftKey || e.ctrlKey || e.metaKey || e.which === 2) return;
                    e.preventDefault();
                    app?.history?.back();
                }}
            />
        );
    }
}

class homeLinkComponent extends Component {
    attributes = data.resources.find((item) => {
        return item.type == 'forums';
    }).attributes;

    view() {
        return (
            <LinkButton
                className="Button  Button--flat"
                href={this.attributes.baseUrl}
                onclick={(e) => {
                    if (e.ctrlKey || e.metaKey || e.button === 1) return;
                    e.preventDefault();
                    app.history.home();

                    // Reload the current user so that their unread notification count is refreshed.
                    const userId = app.session.user?.id();
                    if (userId) {
                        app.store.find('users', userId);
                        m.redraw();
                    }
                }}
            >
                {(() => {
                    if (this.attributes.logoUrl) {
                        return <img className="logo" src={this.attributes.logoUrl} />;
                    }
                    if (this.attributes.faviconUrl) {
                        return [<img className="icon" src={this.attributes.faviconUrl} />, this.attributes.title];
                    }
                    return this.attributes.title;
                })()}
            </LinkButton>
        );
    }
}

export { backButtonComponent as backButton, homeLinkComponent as homeLink };
