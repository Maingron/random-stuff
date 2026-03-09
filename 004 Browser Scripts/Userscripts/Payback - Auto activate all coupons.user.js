// ==UserScript==
// @name         Payback: Automatically activate all coupons
// @namespace    https://maingron.github.io/
// @version      2026.03.1
// @description  Automatically activate all coupons on the Payback website
// @author       Maingron
// @copyright    2026 Maingron
// @license      MIT
// @match        http*://www.payback.de/coupons*
// @match        http*://payback.de/coupons*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/maingron/random-stuff/main/004%20Browser%20Scripts/Userscripts/Payback%20-%20Auto%20activate%20all%20coupons.user.js
// @updateURL    https://raw.githubusercontent.com/maingron/random-stuff/main/004%20Browser%20Scripts/Userscripts/Payback%20-%20Auto%20activate%20all%20coupons.user.js
// ==/UserScript==

(function() {
	'use strict';
	if(window.location.host.includes("payback") && window.location.pathname == "/coupons") {
		console.log("[UserScript][Maingron][Payback: Automatically activate all coupons] We are on the correct page. Will automatically activate all coupons in 500ms!");
		window.setTimeout(() => {
			document.querySelectorAll(`*[data-testid="not-activated-coupons-section"] button`).forEach((e) => {
				e.click();
			});
		}, 500);
	}
})();
