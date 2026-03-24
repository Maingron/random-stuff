// ==UserScript==
// @name             Payback: Automatically activate all coupons
// @name:de          Payback: Alle Coupons automatisch aktivieren
// @name:en          Payback: Automatically activate all coupons
// @author           Maingron
// @namespace        https://maingron.com/
// @homepage         https://maingron.com/
// @supportURL       https://github.com/Maingron/random-stuff/issues
// @source           https://github.com/Maingron/random-stuff/blob/main/004%20Browser%20Scripts/Userscripts/Payback%20-%20Auto%20activate%20all%20coupons.user.js
// @downloadURL      https://raw.githubusercontent.com/Maingron/random-stuff/main/004%20Browser%20Scripts/Userscripts/Payback%20-%20Auto%20activate%20all%20coupons.user.js
// @updateURL        https://raw.githubusercontent.com/Maingron/random-stuff/main/004%20Browser%20Scripts/Userscripts/Payback%20-%20Auto%20activate%20all%20coupons.user.js
// @version          2026.03.4
// @description      Automatically activate all coupons on the Payback website
// @description:de   Alle Payback Gutscheine automatisch aktivieren
// @description:en   Automatically activate all coupons on the Payback website
// @icon             https://www.payback.de/favicon.ico
// @copyright        2026 Maingron
// @created          2026-03-09
// @modified         2026-03-09
// @license          MIT
// @match            http*://www.payback.de/coupons*
// @match            http*://payback.de/coupons*
// @grant            none
// @tag              payback
// @tag              coupons
// @tag              auto-activate
// ==/UserScript==

(function() {
	'use strict';
	if(window.location.host.includes("payback") && window.location.pathname == "/coupons") { // Ensure we're on the coupons page
		console.log("[UserScript][Maingron][Payback: Automatically activate all coupons] We are on the correct page. Will automatically activate all coupons shortly!");
		window.setTimeout(() => {
			let i = 0;
			document.querySelectorAll(`*[data-testid="not-activated-coupons-section"] button`).forEach((e) => { // Select all buttons in the "not activated coupons" section
				window.setTimeout(() => {
					e.click(); // Click button
				}, i++*15)
			});
		}, 500);
	}
})();
