<?php

/*
 * This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */

namespace DaleZ\fluent_flarum;

use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;

$old = [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->head[] = '<script>(function () {
                var r = getComputedStyle(document.querySelector(":root"));

                function changeTitleColor() {
                    if (r.getPropertyValue("--colored-titlebar") === "false") {
                        var m = document.querySelector(`meta[name="theme-color"]`);
                        m.content = r.getPropertyValue("--header-bg");
                    };
                }
            
                changeTitleColor();
                if (r.getPropertyValue("--colored-titlebar") === "false") new Promise(function (resolve) {
                    var id = setInterval(function () {
                        if (flarum) {
                            if (flarum.extensions) {
                                clearInterval(id);
                                resolve();
                            }
                        }
                    }, 500)
                }).then(function () {
                    if (flarum.extensions["fof-nightmode"]) {
                        document.addEventListener("fofnightmodechange", changeTitleColor);
                    }
                });
            })();</script>';
        })
        ->css(__DIR__.'/oldless/forum.less'),  

        new Extend\Locales(__DIR__.'/locale'),
    ];

$new = [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $settings = resolve(SettingsRepositoryInterface::class);

            if (!($settings->get('theme_colored_header'))) {
                /*
                $document->head[] = '<script>(function () {
                    var r = getComputedStyle(document.querySelector(":root"));
    
                    function changeTitleColor() {
                        var m = document.querySelector(`meta[name="theme-color"]`);
                        m.content = r.getPropertyValue("--header-bg");
                    }
                
                    changeTitleColor();
                    new Promise(function (resolve) {
                        var id = setInterval(function () {
                            if (flarum) {
                                if (flarum.extensions) {
                                    clearInterval(id);
                                    resolve();
                                }
                            }
                        }, 500)
                    }).then(function () {
                        if (flarum.extensions["fof-nightmode"]) {
                            document.addEventListener("fofnightmodechange", changeTitleColor);
                        }
                    });
                })();</script>';
                */
                $document->head[] = '<script>(function(){function a(){var a=document.querySelector(`meta[name="theme-color"]`);a.content=b.getPropertyValue("--header-bg")}var b=getComputedStyle(document.querySelector(":root"));a(),new Promise(function(a){var b=setInterval(function(){flarum&&flarum.extensions&&(clearInterval(b),a())},500)}).then(function(){flarum.extensions["fof-nightmode"]&&document.addEventListener("fofnightmodechange",a)})})();</script>';
            }

            $isVTDisabled = $settings->get('dalez-fluent-flarum.disableViewTransition', false);
            $document->payload['dalez_fluent_flarum.disableViewTransition'] = $isVTDisabled;

            if (!$isVTDisabled) {
                // For original code please see /js/src/forum/viewTransition/stub.js
                $document->head[] = "<script>(()=>{if(!document.startViewTransition)return;window.rAF=requestAnimationFrame;window.requestAnimationFrame=(f)=>{const t = 'utils/fluent_internal_transition_controller';if(!flarum||!flarum.core||!flarum.core.compat||!flarum.core.compat[t]||typeof flarum.core.compat[t]!='function'){window.rAF(f);return}flarum.core.compat[t](f)}})();</script>";
            }
        })
        // ->css(__DIR__.'/oldless/forum.less')
        ->css(__DIR__.'/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'), 

        (new Extend\Theme)
            ->overrideLessImport('common/variables.less', __DIR__.'/less/flarum/core/variables.less')
            ->overrideLessImport('common/root.less', __DIR__.'/less/flarum/core/root.less')
            ->overrideLessImport('common/Button.less', __DIR__.'/less/flarum/core/button.less')
            ->overrideLessImport('common/Checkbox.less', __DIR__.'/less/flarum/core/toggle.less')
            ->overrideLessImport('common/LoadingIndicator.less', __DIR__.'/less/flarum/core/LoadingIndicator.less')
            ->overrideLessImport('common/Modal.less', __DIR__.'/less/flarum/core/Modal.less')
            ->overrideLessImport('common/Dropdown.less', __DIR__.'/less/flarum/core/Dropdown.less')
            ->overrideLessImport('common/Tooltip.less', __DIR__.'/less/flarum/core/Tooltip.less')
            ->overrideLessImport('common/FormControl.less', __DIR__.'/less/flarum/core/FormControl.less')
            ->overrideLessImport('forum/Hero.less', __DIR__.'/less/flarum/core/Hero.less')
            ->overrideLessImport('forum/Scrubber.less', __DIR__.'/less/flarum/core/Scrubber.less')
            ->overrideLessImport('forum/UserCard.less', __DIR__.'/less/flarum/core/UserCard.less')
            ->overrideLessImport('forum/DiscussionListItem.less', __DIR__.'/less/flarum/core/DiscussionListItem.less'),

        (new Extend\Settings())
            ->default('dalez-fluent-flarum.disableBeta', false)
            ->default('dalez-fluent-flarum.background', 'solid')
            ->default('dalez-fluent-flarum.disableViewTransition', false)
            ->registerLessConfigVar('dalez-fluent-flarum-background', 'dalez-fluent-flarum.background', function ($value) {
                return $value ? str_replace("_", "", $value) : 'solid';
            }),

        new Extend\Locales(__DIR__.'/locale'),
    ];

return resolve(SettingsRepositoryInterface::class)->get('dalez-fluent-flarum.disableBeta', false) ? $old : $new;