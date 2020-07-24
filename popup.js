//const bg = chrome.extension.getBackgroundPage()
//bg.toPopup()
	
document.getElementById("hidden_rt").onclick = function(){
	chrome.tabs.query({
    active: true,
    currentWindow: true
	}, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, {hidden_rt: true})
	})
}

document.getElementById("show_rt").onclick = function(){	
	chrome.tabs.query({
    active: true,
    currentWindow: true
	}, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, {show_rt:true})
	})
}

document.getElementById("hidden_trans").onclick = function(){	
	chrome.tabs.query({
    active: true,
    currentWindow: true
	}, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, {hidden_trans:true, trans_tag:document.getElementById("trans_tag").value})
	})
}

document.getElementById("show_trans").onclick = function(){	
	chrome.tabs.query({
    active: true,
    currentWindow: true
	}, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, {show_trans:true, trans_tag:document.getElementById("trans_tag").value})
	})
}