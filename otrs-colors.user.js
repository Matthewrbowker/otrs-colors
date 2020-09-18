// ==UserScript==
// @name         OTRS Queue Colors
// @namespace    https://wikimedia.org
// @version      0.1
// @description  Restores the OTRS color scheme everyone knows and loves!
// @author       Matthew Bowker
// @match        https://ticket.wikimedia.org/otrs/index.pl?Action=AgentTicketZoom;TicketID=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // CSS from T263243
    let css = `
        tr.Incoming > td {
            background: #d4defc !important;
        }

        tr.Outgoing > td {
            background: #d3e5b5 !important;
        }`;

    // Create a style tag
    let tag = document.createElement("style");
    tag.innerText = css;

    // Create a head tag
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(tag);
})();
