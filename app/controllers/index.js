// function doClick(e) {
    // alert($.label.text);
// }

function showLogin() {
	Alloy.createController("login").getView().open();
}

function showNewOrder() {
	Alloy.createController("neworder").getView().open();
}

$.index.open();