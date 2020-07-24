rts = document.getElementsByTagName("rt");

function hidden_rt(){
for (var i = 0; i < rts.length; i++) { rts[i].style.visibility="hidden"; }
}

function show_rt(){
for (var i = 0; i < rts.length; i++) { rts[i].style.visibility=""; }
}

function visi2(parent, tag_str, hidden_value) {
tags = tag_str.split("\.");
if (tags.length == 1) {
	var spans = parent.getElementsByTagName(tags[0]);
	for (var j = 0; j < spans.length; j++) {
		spans[j].style.visibility=hidden_value;
	}
} else {
	var sections = parent.getElementsByTagName(tags[0]);
	for (var i = 0; i < sections.length; i++) {
		visi2(sections[i], tag_str.substr(tag_str.indexOf(".")+1), hidden_value);
	}
}
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.hidden_rt) {
    hidden_rt();
	} else if (request.show_rt) {
		show_rt();
	} else if (request.hidden_trans) {
		visi2(document, request.trans_tag, "hidden");
	} else if (request.show_trans) {
		visi2(document, request.trans_tag, "");
	}
})