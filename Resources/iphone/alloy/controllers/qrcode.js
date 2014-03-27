function Controller() {
    function checkPage() {
        var ripple_url = "https://ripple.com//send?to=" + Alloy.Globals.currentWallet + "&amount=" + Alloy.Globals.current["price"] + "&dt=" + Alloy.Globals.current["currency"];
        var ripple_url_enc = encodeURIComponent(ripple_url);
        var goog_url = "https://chart.googleapis.com/chart?cht=qr&chl=" + ripple_url_enc + "&choe=UTF-8&chs=300x300";
        var qrTitle = "Pay " + Alloy.Globals.current["price"] + " " + Alloy.Globals.current["currency"] + " to " + Alloy.Globals.currentWallet;
        var webview = Titanium.UI.createWebView({
            url: goog_url,
            width: 300,
            height: 300
        });
        var window = Titanium.UI.createWindow({
            backgroundColor: "white"
        });
        var infoBtn = Ti.UI.createLabel({
            text: qrTitle,
            top: 20,
            layout: "vertical",
            height: 44
        });
        var closeBtn = Ti.UI.createLabel({
            text: "Close Window",
            bottom: 20,
            layout: "vertical",
            height: 44,
            backgroundColor: "#3372AD"
        });
        window.add(webview);
        window.add(infoBtn);
        window.add(closeBtn);
        window.open();
        closeBtn.addEventListener("click", function() {
            window.close();
            Alloy.createController("neworder").getView().open();
        });
        setTimeout(function() {
            checkTransaction();
        }, 5e3);
    }
    function checkTransaction() {
        if ("" == Alloy.Globals.currentWallet || "" == typeof Alloy.Globals.current["price"]) return;
        var url = Alloy.Globals.api["url"] + "/addresses/" + Alloy.Globals.currentWallet + "/next_notification";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var got = this.responseText;
                Ti.API.info("Received text: " + got);
                alert("Transaction Verification Data Received");
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert(e.error);
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "qrcode";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.qrcode = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "qrcode",
        title: "HAUL ASS AND GET PAID",
        modal: "false"
    });
    $.__views.qrcode && $.addTopLevelView($.__views.qrcode);
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId8"
    });
    $.__views.__alloyId8 && $.addTopLevelView($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.qrcode.addEventListener("open", checkPage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;