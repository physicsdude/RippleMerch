function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "qrcode";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.qrcodeWin = Ti.UI.createWindow({
        id: "qrcodeWin",
        title: "QR Code",
        modal: "true"
    });
    $.__views.qrcodeWin && $.addTopLevelView($.__views.qrcodeWin);
    focusTextField ? $.__views.qrcodeWin.addEventListener("open", focusTextField) : __defers["$.__views.qrcodeWin!open!focusTextField"] = true;
    $.__views.label = Ti.UI.createLabel({
        text: "QR Code",
        id: "label"
    });
    $.__views.qrcodeWin.add($.__views.label);
    $.__views.qrCodeTextField = Ti.UI.createTextField({
        id: "qrCodeTextField",
        hintText: "Put test text here..."
    });
    $.__views.qrcodeWin.add($.__views.qrCodeTextField);
    closeKeyboard ? $.__views.qrCodeTextField.addEventListener("return", closeKeyboard) : __defers["$.__views.qrCodeTextField!return!closeKeyboard"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Generate QR Code",
        id: "__alloyId3"
    });
    $.__views.qrcodeWin.add($.__views.__alloyId3);
    showNewQRCode ? $.__views.__alloyId3.addEventListener("click", showNewQRCode) : __defers["$.__views.__alloyId3!click!showNewQRCode"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.qrcodeWin!open!focusTextField"] && $.__views.qrcodeWin.addEventListener("open", focusTextField);
    __defers["$.__views.qrCodeTextField!return!closeKeyboard"] && $.__views.qrCodeTextField.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId3!click!showNewQRCode"] && $.__views.__alloyId3.addEventListener("click", showNewQRCode);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;