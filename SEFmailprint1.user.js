// ==UserScript==
// @name         webmail print
// @description  adiciona um botão para imprimir na barra de menu das páginas das mensagens de email (exchange webmail)
// @version      0.1
// @author       Nuno Xavier (script adaptado de outros scripts disponiveis na net)
// @grant        none
// @include         https://mail.sef.pt/owa/*
// @downloadURL    https://cld.pt/dl/download/ab745fbc-0acb-49d2-901a-75b1d8ef1e62/SEFmailprint1.user.js
// @icon           http://gmscripts.locusprime.net/script_icons/bookmarks.png
// ==/UserScript==

(

function()
{
	var thisElement;
	var elementsToHide;
	elementsToHide=["//td[@class='nvtd']","//td[@class='spc']","//table[@class='tbhd']","//img[@id='imgLogo']",
	"//table[@id='tblSch']","//table[@class='ob']","//table[@class='nvwh100']","//td[@class='nvft']",
	"//td[@valign='bottom']","//td[@class='tdLogoB']"];
	function xpath(query) {
	    return document.evaluate(query, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	}


	function setElements(value){
		for (i in elementsToHide) {
			thisElement = xpath(elementsToHide[i]);
			for (x = 0; x < thisElement.snapshotLength; x++) {
		    	currElement = thisElement.snapshotItem(x);
		    	currElement.style.display = value;
		    }
		}
	}
        function resetElements(){
		setElements("");
	}
	function printEmail(){
		setElements("none");
		window.print();
		window.setTimeout(resetElements, 1000);
	}

	var link;
	link = document.createElement("td");
	link.setAttribute("nowrap", "");
	link.innerHTML = '<a id="lnkHdrprint" title="Print" class="btn" href="#">*Imprimir*</a>';
	closeBtn = document.getElementById("lnkHdrclose");
	if (closeBtn !== undefined){
		closeBtnTd = closeBtn.parentNode;
		parentElement = closeBtnTd.parentNode;
		parentElement.insertBefore(link, closeBtnTd);
		divider = document.createElement("td");
		divider.setAttribute("class", "dv");
		divider.innerHTML = '<img alt="" src=""/>';
		printBtn = document.getElementById("lnkHdrprint");
		printBtnTd = printBtn.parentNode;
		parentElement.insertBefore(divider, printBtnTd.nextSibling);
		printBtn.addEventListener("click", printEmail, true);
	}
}
)();
//END FILE