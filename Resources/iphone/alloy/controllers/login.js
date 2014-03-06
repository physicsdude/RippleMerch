function Controller() {
    function login() {
        var myMerchants = Alloy.Collections.merchants;
        Alloy.Globals.currentWallet = $.walletNameField.value;
        var merchant = Alloy.createModel("merchants", {
            wallet_name: $.walletNameField.value
        });
        myMerchants.add(merchant);
        merchant.save();
        myMerchants.fetch();
        closeWindow();
        Alloy.createController("neworder").getView().open();
    }
    function focusTextField() {
        $.walletNameField.focus();
    }
    function closeKeyboard(e) {
        e.source.blur();
    }
    function closeWindow() {
        $.loginWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        barColor: "#a00",
        id: "loginWin",
        title: "Merchant",
        modal: "false"
    });
    $.__views.loginWin && $.addTopLevelView($.__views.loginWin);
    focusTextField ? $.__views.loginWin.addEventListener("open", focusTextField) : __defers["$.__views.loginWin!open!focusTextField"] = true;
    $.__views.logoImage = Ti.UI.createImageView({
        image: "shared/images/logo.png",
        width: 250,
        height: 75,
        top: 100,
        id: "logoImage"
    });
    $.__views.loginWin.add($.__views.logoImage);
    $.__views.label = Ti.UI.createLabel({
        top: 25,
        text: "Merchant Login",
        id: "label"
    });
    $.__views.loginWin.add($.__views.label);
    $.__views.walletNameField = Ti.UI.createTextField({
        width: "90%",
        top: "25dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "walletNameField",
        hintText: "Wallet Name"
    });
    $.__views.loginWin.add($.__views.walletNameField);
    closeKeyboard ? $.__views.walletNameField.addEventListener("return", closeKeyboard) : __defers["$.__views.walletNameField!return!closeKeyboard"] = true;
    $.__views.__alloyId0 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Login",
        id: "__alloyId0"
    });
    $.__views.loginWin.add($.__views.__alloyId0);
    login ? $.__views.__alloyId0.addEventListener("click", login) : __defers["$.__views.__alloyId0!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.loginWin!open!focusTextField"] && $.__views.loginWin.addEventListener("open", focusTextField);
    __defers["$.__views.walletNameField!return!closeKeyboard"] && $.__views.walletNameField.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId0!click!login"] && $.__views.__alloyId0.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;