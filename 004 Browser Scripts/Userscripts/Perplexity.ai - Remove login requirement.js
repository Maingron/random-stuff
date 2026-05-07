// ==UserScript==
// @name             Perplexity.ai: Remove login requirement
// @name:de          Perplexity.ai: Login-Bedingung entfernen
// @name:en          Perplexity.ai: Remove login requirement
// @author           Maingron
// @namespace        https://maingron.com/
// @homepage         https://maingron.com/
// @supportURL       https://github.com/Maingron/random-stuff/issues
// @version          2026.05.1
// @description      Remove login requirement on Perplexity.ai. This includes all annoying overlays, cookie banner and Login features.
// @description:de   Login Bedingung auf Perpexity.ai entfernen. Dies entfernt alle nervigen Overlays, Cookie Banner und Login Features.
// @description:en   Remove login requirement on Perplexity.ai. This includes all annoying overlays, cookie banner and Login features.
// @icon             https://www.perplexity.ai/favicon.svg
// @copyright        2026 Maingron
// @created          2026-05-07
// @modified         2026-05-07
// @license          MIT
// @match            http*://www.perplexity.ai/*
// @match            http*://perplexity.ai/*
// @grant            GM_addStyle
// @tag              perplexity
// @tag              perplexity.ai
// @tag              Pop-Up
// ==/UserScript==

(function() {
	'use strict';
	console.log("[UserScript][Maingron][Perplexity.ai: Remove login requirement] Removing overlays and writing CSS Code to page");
	const elementsSelectors = [
		"html[lang][dir] body script#google-identity-services-script",
		"html[lang][dir] body #credential_picker_container iframe",
		"html[lang][dir] body #cookie-consent",
		"html[lang][dir] body div[data-type='portal']"
	];

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
	});
})();
