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

$.index.open();