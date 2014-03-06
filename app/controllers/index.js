// function doClick(e) {
    // alert($.label.text);
// }

function showLogin() {
	Alloy.createController("login").getView().open();
}

function showNewOrder() {
	Alloy.createController("neworder").getView().open();
}

function showNewQRCode() {
	Alloy.createController("qrcode").getView().open();
}

$.index.addEventListener('open', checkPage);
$.index.pageLoad = false;
function checkPage() {
	if ($.index.pageLoad) {

if (OS_IOS) {
	Titanium.UI.iPhone.hideStatusBar();
}
		
		$.index.open();
	} else {
		$.index.close();
		showLogin();
	}
}

$.index.open();