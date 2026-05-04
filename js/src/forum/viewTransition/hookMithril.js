/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */

import cachePool from './cachePool';

export default function hookMithril() {
    // backup the origional functions

    m.route.oldSet = m.route.set;
    m.sync = m.redraw.sync;

    // hook

    m.route.set = (...args) => {
        cachePool.calling = 'true';
        m.route.oldSet(...args);
        return;
    };

    // (what does the codes below do? I just forgot...)
    // maybe it has no use. disable it to see what'll happen.

    /*
    m.redraw = () => {
            if (!window.pending) {
                window.pending = true;
                window.rAF(function() {
                    pending = false;
                    m.redraw.sync();
                })
            }
        }
    */

    // restore

    m.redraw.sync = m.sync;

    // hook `popstate` event so that the transition can be available
    // when user starts their navigation with buttons provided by
    // browser.

    window.addEventListener(
        'popstate',
        (e) => {
            // if browser performs transition for us, then we don't.
            if (!e.hasUAVisualTransition) cachePool.calling = 'true';
        },
        true
    );
}
