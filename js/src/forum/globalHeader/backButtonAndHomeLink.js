import app from "flarum/forum/app";
import Component from "flarum/common/Component";
import LinkButton from "flarum/common/components/LinkButton";

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
        )
    }
}

const homeLink = document.getElementById('home-link');
const homeLinkHref = homeLink.href;
const homeLinkChilds = Array.from(homeLink.childNodes).map((node) => node.cloneNode(true));

class homeLinkComponent extends Component {
    view() {
        return (
            <LinkButton
                className="Button  Button--flat"
                href={homeLinkHref}
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
                }}></LinkButton>
        )
    }

    oncreate(vnode) {
        const theButton = vnode.dom.children[0];
        theButton.append(...homeLinkChilds);

        if (theButton.matches('img')) return;
        
        const linkEles = document.head.querySelectorAll('[rel~=icon]');
        const linkNum = linkEles.length;

        if (linkNum == 0) return;

        theButton.dataset.favicon = linkEles[linkNum - 1]?.href;
    }
}

export default {
    backButton: backButtonComponent,
    homeLink: homeLinkComponent
}