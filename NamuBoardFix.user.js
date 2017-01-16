// ==UserScript==
// @name         NamuBoardFix
// @namespace    http://lastorder.xyz
// @version      0.1
// @downloadURL  https://raw.githubusercontent.com/Lastorder-DC/NamuBoardFix/master/NamuBoardFix.user.js
// @description  Change board.namu.wiki time to Local Timezone
// @author       Lastorder-DC
// @match        https://board.namu.wiki/*
// @require      https://cdn.rawgit.com/moment/moment/2.17.1/min/moment.min.js
// @connect      cdn.rawgit.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    if(typeof jQuery != "undefined") {
        jQuery('.time').each(function(index){
            var orgTime = jQuery(this).text();
            if(orgTime.indexOf(":") != -1) {
                var date = new Date(jQuery(this).text() + 'UTC');
                var m = moment(jQuery(this).text() + "Z", "YYYY.MM.DD HH:mmZ");
                //console.log("Original Date : " + jQuery(this).text());
                //console.log("Converted Date : ");
                //console.log(m.format("YYYY.MM.DD HH:mm"));
                //console.log("===============");
                jQuery(this).text(m.format("YYYY.MM.DD HH:mm"));
            }
        });
    }
})();
