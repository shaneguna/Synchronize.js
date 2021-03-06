/**
 * Copyright (c) 2013-2016, Denis Meyer, calltopower88@googlemail.com
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var loggingEnabled = true;

(function($) {
    videojs.options.flash.swf = "swf/video-js.swf";
    videoId1 = "example_video_1";
    // videoId2 = "example_video_2";
    // videoId3 = "example_video_3";
    mediagroupId = "videoMG1";

    $(document).ready(function() {
        $(document).on("sjs:allPlayersReady", function() {
            $("#bufferInfo").html("All players have been successfully initialized.");
        });
        $("#buttonPlay").click(function() {
            $(document).trigger("sjs:play", []);
        });
        $("#buttonPause").click(function() {
            $(document).trigger("sjs:pause", []);
        });
        $("#buttonResetVideo").click(function() {
            $(document).trigger("sjs:setCurrentTime", [0]);
        });
        $(document).on("sjs:buffering", function() {
            $("#bufferInfo").html("Not every player has buffered, yet. Pausing...");
        });
        $(document).on("sjs:bufferedAndAutoplaying", function() {
            $("#bufferInfo").html("Every player has buffered now. Starting playing again...");
        });
        $(document).on("sjs:bufferedButNotAutoplaying", function(event) {
            $("#bufferInfo").html("Every player has buffered now, but there was a timeupdate, pause, ... event...");
        });
        $(document).on("sjs:masterTimeupdate", function(event, param) {
            $("#currentTime").html(param);
        });

        // $.synchronizeVideos(0, videoId1, videoId2, videoId3);
        $(document).trigger("sjs:debug", loggingEnabled);
        $.synchronizeVideos(0, mediagroupId);

        videojs(videoId1).ready(function() {
            videojs("example_video_1").thumbnails({
                0: {
                    src: 'img/thumbnails.png',
                    style: {
                        left: '-60px',
                        width: '600px',
                        height: '68px',
                        clip: 'rect(0, 120px, 68px, 0)'
                    }
                },
                10: {
                    style: {
                        left: '-180px',
                        clip: 'rect(0, 240px, 68px, 120px)'
                    }
                },
                20: {
                    style: {
                        left: '-300px',
                        clip: 'rect(0, 360px, 68px, 240px)'
                    }
                },
                30: {
                    style: {
                        left: '-420px',
                        clip: 'rect(0, 480px, 68px, 360px)'
                    }
                },
                40: {
                    style: {
                        left: '-540px',
                        clip: 'rect(0, 600px, 68px, 480px)'
                    }
                }
            });
        });
    });
})(jQuery);
