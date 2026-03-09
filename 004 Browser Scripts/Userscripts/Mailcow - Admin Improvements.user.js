// ==UserScript==
// @name             Mailcow: Admin Improvements
// @name:de          Mailcow: Admin Verbesserungen
// @name:en          Mailcow: Admin Improvements
// @author           Maingron
// @namespace        https://maingron.com/
// @homepage         https://maingron.com/
// @supportURL       https://github.com/Maingron/random-stuff/issues
// @source           https://github.com/Maingron/random-stuff/blob/main/004%20Browser%20Scripts/Userscripts/Mailcow%20-%20Admin%20Improvements.user.js
// @downloadURL      https://raw.githubusercontent.com/Maingron/random-stuff/main/004%20Browser%20Scripts/Userscripts/Mailcow%20-%20Admin%20Improvements.user.js
// @updateURL        https://raw.githubusercontent.com/Maingron/random-stuff/main/004%20Browser%20Scripts/Userscripts/Mailcow%20-%20Admin%20Improvements.user.js
// @version          2026.03.1-dev
// @description      Slight UI Improvements for Mailcow Admins
// @icon             https://mailcow.email/favicon.ico
// @copyright        2026 Maingron
// @created          2026-03-09
// @modified         2026-03-09
// @license          MIT
// @match            http*://*/quarantine
// @grant            GM_addStyle
// @tag              mailcow
// ==/UserScript==

(function() {
	'use strict';

	// Verify we only run on our wanted pages
	if(document.querySelectorAll("html body:has(form,.container) #quarantinetable").length == 0) {
		return false;
	}

	// Make quarantine checkbox easier to hit
	GM_addStyle(`
		#quarantinetable .form-check-input {
			scale: 2.75;
		}
	`);
})();
