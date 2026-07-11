/*
 * This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import hookGlobalHeader from './globalHeader';
import viewTransition from './viewTransition';

app.initializers.add('dalez-fluent-flarum', () => {
    hookGlobalHeader();
    viewTransition();
});
