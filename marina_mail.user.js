// ==UserScript==
// @name         marina mail
// @description  Torna os emails de movimentos de embarcações mais fáceis de ler. Procura "/nT" no texto e substitui por uma linha nova/parÃ¡grafo.
// @version      0.1
// @author       Nuno Xavier
// @grant        none
// @include   https://mail.sef.pt/owa/pf214.vilamoura@sef.pt/*
// @downloadURL  https://cld.pt/dl/download/f4c362f5-6401-4845-8300-d334546fb585/marina_mail.user.js  
// @icon           http://gmscripts.locusprime.net/script_icons/insert_text.png
// ==/UserScript==


var els = document.getElementsByTagName("div");
for(var i = 0, l = els.length; i < l; i++) {
  var el = els[i];
  el.innerHTML = el.innerHTML.replace(/\/nT/g, '<br>');
}