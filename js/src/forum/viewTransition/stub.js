/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */

/*
    The code below isn't used here; It'll be appended to
    <head> as a part of code of patching mithril. However,
    we keep the original code for clearity.
*/

(() => {
    if (!document.startViewTransition) return;
    window.rAF = requestAnimationFrame;
    window.requestAnimationFrame = (func) => {
        if (
            !flarum ||
            !flarum.core ||
            !flarum.core.compat ||
            !flarum.core.compat['utils/flunet_internal_transition_controller'] ||
            typeof flarum.core.compat['utils/flunet_internal_transition_controller'] != 'function'
        ) {
            window.rAF(func);
            return;
        }

        flarum.core.compat['utils/transition_controller'](func);
    }
})();