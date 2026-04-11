/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */

import cachePool from './cachePool';

export default function () {
    function grab(event) {
        cachePool.click_event = event;
    }

    document.addEventListener('click', grab, { capture: true });
}
