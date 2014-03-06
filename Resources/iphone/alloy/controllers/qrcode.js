function Controller() {
    function checkPage() {
        if ($.qrcode.pageLoad) $.qrcode.open(); else {
            $.qrcode.close();
            Alloy.createController("neworder").getView().open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "qrcode";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.qrCodeWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "qrCodeWin",
        title: "Merchant",
        modal: "false"
    });
    $.__views.qrCodeWin && $.addTopLevelView($.__views.qrCodeWin);
    focusTextField ? $.__views.qrCodeWin.addEventListener("open", focusTextField) : __defers["$.__views.qrCodeWin!open!focusTextField"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.qrcode.addEventListener("open", checkPage);
    $.qrcode.pageLoad = false;
    __defers["$.__views.qrCodeWin!open!focusTextField"] && $.__views.qrCodeWin.addEventListener("open", focusTextField);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;