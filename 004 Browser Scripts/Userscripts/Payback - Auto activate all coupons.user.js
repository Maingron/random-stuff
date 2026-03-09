// ==UserScript==
// @name         Payback: Automatically activate all coupons
// @namespace    https://maingron.github.io/
// @version      2026.03.1-dev
// @description  Automatically activate all coupons on the Payback website
// @author       Maingron
// @copyright    2026 Maingron
// @license      MIT
// @match        http*://www.payback.de/coupons*
// @match        http*://payback.de/coupons*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	if(window.location.host.includes("payback") && window.location.pathname == "/coupons") {
		window.setTimeout(() => {
			document.querySelectorAll(`*[data-testid="not-activated-coupons-section"] button`).forEach((e) => {
				e.click();
			});
		}, 500);
	}
})();
