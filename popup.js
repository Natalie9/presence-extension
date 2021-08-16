import {presence} from "./presence";

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
    console.log('carregou d novo')

});

// Initialize butotn with users's prefered color
let downloadLista = document.getElementById("btn_download-list");



// When the button is clicked, inject setPageBackgroundColor into current page
downloadLista.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: downloadListFn,
    });
});



function downloadListFn(){
    presence()
}
