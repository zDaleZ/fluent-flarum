/*
 * This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import addUserCardToSessionDropdown from './userSessionDropdown/index';
import hookDiscussionPageLoading from './discussionPage';
import hookGlobalHeader from './globalHeader';
import hookScrubber from './PostStreamScrubberHook';

function withID(more = "") {
    return `dalez-fluent-flarum${more}`;
}

async function getNoiseAsset() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 256;
    const context = canvas.getContext('2d');
    const imageData = new ImageData(256, 256);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        let color = Math.floor(Math.random() * 255);
        data[i] = color;
        data[i + 1] = color;
        data[i + 2] = color;
        data[i + 3] = 8;
    }

    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}

const rootStyle = document.documentElement.style;
const bodyClassList = document.body.classList;

function mqListener() {
    refreshDPIScale();
    this.removeEventListener('change', mqListener);
    matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener('change', mqListener);
};

function refreshDPIScale() {
    rootStyle.setProperty('--dpi-scale', window.devicePixelRatio * window.visualViewport.scale);
}

app.initializers.add(withID(), () => {
    (async () => {
        rootStyle.setProperty('--noise-asset', `url(${await getNoiseAsset()})`);
        refreshDPIScale();
    })();
    document.body.classList.toggle('activated');
    window.addEventListener('blur', () => bodyClassList.remove('activated'));
    window.addEventListener('focus', () => bodyClassList.add('activated'));
    window.visualViewport.addEventListener('resize', refreshDPIScale);
    matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener('change', mqListener);

    addUserCardToSessionDropdown();
    hookDiscussionPageLoading();
    hookGlobalHeader();
    hookScrubber();
});