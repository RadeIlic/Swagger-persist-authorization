// ==UserScript==
// @name         Swagger persist authorization
// @namespace    http://tampermonkey.net/
// @version      2024-04-26
// @description  Persist swagger authorization
// @author       https://github.com/RadeIlic
// @match        *://*.your-swagger-page.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var oldOnload = window.onload;

    var oldOnloadText = oldOnload ? oldOnload.toString() : '';

    var modifiedOnloadText = oldOnloadText.replace('"persistAuthorization":false', '"persistAuthorization":true');
    modifiedOnloadText = modifiedOnloadText.slice(modifiedOnloadText.indexOf('{') + 1, modifiedOnloadText.lastIndexOf('}'));
    var modifiedOnloadFunction = new Function(modifiedOnloadText);

    window.onload = function() {
    modifiedOnloadFunction();
};

})();
