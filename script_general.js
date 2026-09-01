(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"hash": "94c9d8c4ca95071dfeff9ecae68d8caf6921f9b390789d2fa6fa734415e78a68", "definitions": [{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874_camera","end":"this.trigger('tourEnded')","media":"this.panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"thumbnailUrl":"media/panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874_t.webp","label":trans('panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874.label'),"partial":true,"vfov":180,"data":{"label":"frame_0500-Pano-2"},"hfovMin":"100%","hfov":280,"hfovMax":105,"id":"panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874","frames":[{"thumbnailUrl":"media/panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874_t.webp","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874_0/{face}/0/{row}_{column}.webp","rowCount":3,"width":9216,"tags":"ondemand","colCount":18,"height":1536,"class":"TiledImageResourceLevel"},{"url":"media/panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874_0/{face}/1/{row}_{column}.webp","rowCount":2,"width":6144,"tags":"ondemand","colCount":12,"height":1024,"class":"TiledImageResourceLevel"},{"url":"media/panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874_0/{face}/2/{row}_{column}.webp","rowCount":1,"width":3072,"tags":["ondemand","preload"],"colCount":6,"height":512,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"class":"Panorama"},{"initialPosition":{"yaw":0,"pitch":0,"hfov":105,"class":"PanoramaCameraPosition"},"id":"panorama_4C9C2659_5E6D_F5C3_41D1_58AD14C20874_camera","initialSequence":"this.sequence_4EFE881B_5E6D_FD47_41D3_60770E95108E","class":"PanoramaCamera","enterPointingToHorizon":true},{"playbackBarHeadBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","subtitlesGap":0,"vrThumbstickRotationStep":20,"data":{"name":"Main Viewer"},"playbackBarRight":0,"progressBarBorderSize":0,"progressRight":"33%","playbackBarProgressBackgroundColor":["#3399FF"],"width":"100%","subtitlesBackgroundColor":"#000000","playbackBarBottom":5,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorDirection":"horizontal","height":"100%","subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","progressOpacity":0.7,"toolTipPaddingRight":6,"progressBackgroundColor":["#000000"],"subtitlesTextShadowOpacity":1,"playbackBarProgressBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","subtitlesBottom":50,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"vrPointerColor":"#FFFFFF","toolTipBorderColor":"#767676","progressBottom":10,"toolTipPaddingLeft":6,"subtitlesTextShadowHorizontalLength":1,"id":"MainViewer","playbackBarHeadShadowBlurRadius":3,"toolTipBackgroundColor":"#F6F6F6","progressHeight":2,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","progressBorderRadius":2,"playbackBarLeft":0,"playbackBarHeadHeight":15,"progressBorderSize":0,"playbackBarBorderRadius":0,"playbackBarHeadShadowColor":"#000000","vrPointerSelectionTime":2000,"propagateClick":false,"playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingTop":4,"playbackBarHeadBorderSize":0,"playbackBarHeight":10,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingBottom":4,"progressBorderColor":"#000000","playbackBarHeadShadow":true,"playbackBarHeadWidth":6,"subtitlesBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","toolTipFontSize":"1.11vmin","firstTransitionDuration":0,"subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"minWidth":100,"progressBarBorderColor":"#000000","minHeight":50,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","progressLeft":"33%","progressBackgroundColorRatios":[0]},{"displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true},{"id":"sequence_4EFE881B_5E6D_FD47_41D3_60770E95108E","movements":[{"targetYaw":4.88,"easing":"cubic_in","yawSpeed":3.8,"class":"TargetPanoramaCameraMovement"},{"targetYaw":82.63,"yawSpeed":3.8,"class":"TargetPanoramaCameraMovement"},{"targetYaw":87.5,"easing":"cubic_out","yawSpeed":3.8,"class":"TargetPanoramaCameraMovement"}],"class":"PanoramaCameraSequence"}],"layout":"absolute","start":"this.init()","data":{"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnInfoWindow":false,"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"rate":1},"displayTooltipInTouchScreens":true,"name":"Player480","defaultLocale":"en","history":{},"locales":{"en":"locale/en.txt"}},"gap":10,"propagateClick":false,"scrollBarColor":"#000000","width":"100%","backgroundColorRatios":[0],"height":"100%","class":"Player","xrPanelsEnabled":true,"scripts":{"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"translate":TDV.Tour.Script.translate,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"historyGoBack":TDV.Tour.Script.historyGoBack,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlays":TDV.Tour.Script.getOverlays,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"clone":TDV.Tour.Script.clone,"disableVR":TDV.Tour.Script.disableVR,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getMediaByName":TDV.Tour.Script.getMediaByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showWindowBase":TDV.Tour.Script.showWindowBase,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initAnalytics":TDV.Tour.Script.initAnalytics,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"init":TDV.Tour.Script.init,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getComponentByName":TDV.Tour.Script.getComponentByName,"mixObject":TDV.Tour.Script.mixObject,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"initQuiz":TDV.Tour.Script.initQuiz,"enableVR":TDV.Tour.Script.enableVR,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"unregisterKey":TDV.Tour.Script.unregisterKey,"setLocale":TDV.Tour.Script.setLocale,"playAudioList":TDV.Tour.Script.playAudioList,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showWindow":TDV.Tour.Script.showWindow,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getKey":TDV.Tour.Script.getKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"registerKey":TDV.Tour.Script.registerKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizStart":TDV.Tour.Script.quizStart,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"cloneBindings":TDV.Tour.Script.cloneBindings,"createTween":TDV.Tour.Script.createTween,"unloadViewer":TDV.Tour.Script.unloadViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizFinish":TDV.Tour.Script.quizFinish,"toggleVR":TDV.Tour.Script.toggleVR,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers},"scrollBarMargin":2,"minHeight":0,"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColor":["#FFFFFF"],"id":"rootPlayer","children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.0, Tue Sep 1 2026