/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */

import cachePool from './cachePool';

let pool = (cachePool.pool = []);
const content = document.getElementById('content');
const body = document.body;

const style = document.createElement('style');
document.head.appendChild(style);

function markFirstCriticalElements() {
    if (!cachePool.click_event) return;

    /**
     * @type {HTMLElement}
     */
    const clicked = cachePool.click_event.target;

    // clear the event pool

    cachePool.click_event = null;

    try {
        const transitionItem = clicked.closest('.DiscussionListItem, .UserCard, .PostsUserPage');
        if (!transitionItem) return;

        body.classList.toggle('view');
        body.style.viewTransitionName = 'drill';
        style.textContent = `::view-transition-old(drill){translate:0 -${scrollY}px;transform-origin:center calc(${scrollY}px + 50vh)}`;
        // cachePool.beforeElement = transitionItem;
        // transitionItem.style.viewTransitionName = 'keyItem';
    } catch (error) {
        console.warn(`Seems like the selector is invalid. More info: ${error}`);
    }
}

/*
function markSecondCriticalElements() {
    try {
        const transitionItem = content.querySelector('.DiscussionPage-stream, .UserHero');
        if (!transitionItem) return;

        // the before element may still keeps in dom tree
        // and it can't stay with the after element.
        // since it've been captured, we removes its name here.

        cachePool.beforeElement.style.viewTransitionName = '';

        // add the name for the after element.

        transitionItem.style.viewTransitionName = 'keyItem';

        cachePool.afterElement = transitionItem;
    } catch (error) {
        console.warn(`Seems like the selector is invalid. More info: ${error}`);
    }
    body.style.viewTransitionName = '';
}
*/

export default function controller(func) {
    // Is this condition still necessary?
    if (cachePool.calling == 'processing') {
        pool.push(func);
        return;
    }
    if (cachePool.calling == 'true') {
        cachePool.calling = 'processing';
        markFirstCriticalElements();
        console.log('start');
        const view = document.startViewTransition(() => {
            func();
            // markSecondCriticalElements();
        });
        console.log(view);
        view.updateCallbackDone.then(() => {
            cachePool.calling = 'false';
            let i;
            while (typeof (i = pool.shift()) !== 'undefined') {
                window.rAF(i);
            }
        });
        view.ready.then(() => {
            // const old = getAnimations(view, 'drill', ViewTransitionPart.Old)[0];
        });
        /*if (cachePool.afterElement)*/ view.finished.then(() => {
            body.style.viewTransitionName = '';
            setTimeout(() => body.classList.remove('view'), 0);
        });
        return;
    }

    // Browser's back & Next navigation will broke our whole logic.
    // Do the special for it...But since it has been fixed at hookmithril.js,
    // maybe it can be removed?

    window.rAF(func);
}
