// ==UserScript==
// @name             Perplexity.ai: Remove login requirement
// @name:de          Perplexity.ai: Login-Bedingung entfernen
// @name:en          Perplexity.ai: Remove login requirement
// @author           Maingron
// @namespace        https://maingron.com/
// @homepage         https://maingron.com/
// @supportURL       https://github.com/Maingron/random-stuff/issues
// @source           https://github.com/Maingron/random-stuff/blob/main/004%20Browser%20Scripts/Userscripts/Perplexity.ai%20-%20Remove%20login%20requirement.user.js
// @downloadURL      https://raw.githubusercontent.com/Maingron/random-stuff/refs/heads/main/004%20Browser%20Scripts/Userscripts/Perplexity.ai%20-%20Remove%20login%20requirement.user.js
// @updateURL        https://raw.githubusercontent.com/Maingron/random-stuff/refs/heads/main/004%20Browser%20Scripts/Userscripts/Perplexity.ai%20-%20Remove%20login%20requirement.user.js
// @version          2026.06.1-dev
// @description      Remove login requirement on Perplexity.ai. This includes all annoying overlays, cookie banner and Login features.
// @description:de   Login Bedingung auf Perpexity.ai entfernen. Dies entfernt alle nervigen Overlays, Cookie Banner und Login Features.
// @description:en   Remove login requirement on Perplexity.ai. This includes all annoying overlays, cookie banner and Login features.
// @icon             https://www.perplexity.ai/favicon.ico
// @icon             https://www.perplexity.ai/favicon.svg
// @copyright        2026 Maingron
// @created          2026-05-07
// @modified         2026-06-17
// @license          MIT
// @match            http*://www.perplexity.ai/*
// @match            http*://perplexity.ai/*
// @grant            GM_addStyle
// @tag              perplexity
// @tag              perplexity.ai
// @tag              Pop-Up
// OpenUserJS:       https://openuserjs.org/scripts/Maingron/Perplexity.ai_Remove_login_requirement
// Greasy Fork:      https://greasyfork.org/de/scripts/577012-perplexity-ai-remove-login-requirement
// ==/UserScript==




(function() {
	'use strict';
	console.log("[UserScript][Maingron][Perplexity.ai: Remove login requirement] Removing overlays and writing CSS Code to page");

	// Allow scrolling - Perplexity disables scrolling by preventDefault(e). We intercept and prevent preventDefault if wheel or scroll
	const originalPreventDefault = Event.prototype.preventDefault;
	Event.prototype.preventDefault = function () {
		if (this.type == "wheel" || this.type == "scroll" | this.type == "touchmove") { } else {
			return originalPreventDefault.call(this);
		}
	};


	const elementsSelectors = [
		"html[lang][dir] body script#google-identity-services-script",
		"html[lang][dir] body #credential_picker_container iframe",
		"html[lang][dir] body #cookie-consent",
		"html[lang][dir] body div[data-type='portal']",
		"html[lang][dir] body #radix-_r_m_",
		"html[lang][dir] body #radix-_r_h_",
		"html[lang][dir] body span[data-radix-focus-guard]"
	];

	const elementsSelectorsEager = [
		"html[lang][dir] body span[data-radix-focus-guard]"
	]

	GM_addStyle(`
		${elementsSelectors.join(",")} {
			display: none !important;
			visibility: hidden !important;
			opacity: 0 !important;
			pointer-events: none !important;
			user-select: none !important;
		}
	`);

	window.addEventListener("load", function () {
		window.setTimeout(function () {
			document.querySelectorAll(elementsSelectors).forEach((item) => {
				item.remove();
			});
		}, 4400 + Math.random() * 2400); // Timeout value is slightly randomized to make it seem more organic

		document.querySelectorAll(elementsSelectorsEager).forEach((item) => {
			item.remove();
		});
		document.body.style.pointerEvents = "";
	});
})();
