function Controller() {
    function checkTransaction() {
        if ("" == Alloy.Globals.currentWallet || "" == typeof Alloy.Globals.current["price"]) return;
        var url = Alloy.Globals.api["url"] + "/addresses/" + Alloy.Globals.currentWallet + "/next_notification";
        alert("sending " + url);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var got = this.responseText;
                Ti.API.info("Received text: " + got);
                alert("got " + got);
                JSON.parse(got);
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
    function newOrder() {
        var myOrders = Alloy.Collections.orders;
        if ("" == Alloy.Globals.currentWallet) {
            Alloy.Globals.currentWallet = Alloy.Globals.defaultWallet;
            return;
        }
        var order = Alloy.createModel("orders", {
            price: $.priceField.value,
            currency: $.currencyField.value
        });
        myOrders.add(order);
        order.save();
        myOrders.fetch();
        var wallet = Alloy.Globals.currentWallet;
        Alloy.Globals.current["price"] = $.priceField.value;
        var currency = "undefined" == typeof $.currencyField.value ? "USD" : $.currencyField.value;
        var ripple_url = "https://ripple.com//trust?to=" + wallet + "&amount=" + $.priceField.value + "/USD";
        var ripple_url_enc = encodeURIComponent(ripple_url);
        var goog_url = "https://chart.googleapis.com/chart?cht=qr&chl=" + ripple_url_enc + "&choe=UTF-8&chs=300x300";
        closeWindow();
        var qrTitle = "Pay " + $.priceField.value + " " + currency + " to " + wallet;
        var webview = Titanium.UI.createWebView({
            url: goog_url,
            width: 300,
            height: 300
        });
        var window = Titanium.UI.createWindow({
            backgroundColor: "white"
        });
        var closeBtn = Ti.UI.createLabel({
            text: qrTitle,
            top: 20,
            layout: "vertical",
            height: 44
        });
        var infoBtn = Ti.UI.createLabel({
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
        window.open({
            modal: true
        });
        setTimeout(function() {
            checkTransaction();
        }, 5e3);
    }
    function closeKeyboard(e) {
        e.source.blur();
    }
    function closeWindow() {
        $.newOrderWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "neworder";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newOrderWin = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        barColor: "#a00",
        id: "newOrderWin",
        title: "New Order",
        modal: "false"
    });
    $.__views.newOrderWin && $.addTopLevelView($.__views.newOrderWin);
    $.__views.logoImageSmall = Ti.UI.createImageView({
        image: "shared/images/logo.png",
        width: 100,
        height: 50,
        top: 20,
        id: "logoImageSmall"
    });
    $.__views.newOrderWin.add($.__views.logoImageSmall);
    $.__views.label = Ti.UI.createLabel({
        top: 25,
        color: "blue",
        text: "Accept a Payment",
        id: "label"
    });
    $.__views.newOrderWin.add($.__views.label);
    $.__views.priceField = Ti.UI.createTextField({
        width: "85%",
        top: "30dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "priceField",
        hintText: "How Much?"
    });
    $.__views.newOrderWin.add($.__views.priceField);
    closeKeyboard ? $.__views.priceField.addEventListener("return", closeKeyboard) : __defers["$.__views.priceField!return!closeKeyboard"] = true;
    $.__views.currencyField = Ti.UI.createPicker({
        width: "50%",
        top: "0dp",
        id: "currencyField",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.newOrderWin.add($.__views.currencyField);
    var __alloyId1 = [];
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    __alloyId1.push($.__views.column1);
    $.__views.__alloyId2 = Ti.UI.createPickerRow({
        title: "USD",
        id: "__alloyId2"
    });
    $.__views.column1.addRow($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "BTC",
        id: "__alloyId3"
    });
    $.__views.column1.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "XRP",
        selected: "true",
        id: "__alloyId4"
    });
    $.__views.column1.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "LTC",
        id: "__alloyId5"
    });
    $.__views.column1.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "EUR",
        id: "__alloyId6"
    });
    $.__views.column1.addRow($.__views.__alloyId6);
    $.__views.currencyField.add(__alloyId1);
    $.__views.generateCode = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Generate QR Code",
        id: "generateCode"
    });
    $.__views.newOrderWin.add($.__views.generateCode);
    newOrder ? $.__views.generateCode.addEventListener("click", newOrder) : __defers["$.__views.generateCode!click!newOrder"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.priceField!return!closeKeyboard"] && $.__views.priceField.addEventListener("return", closeKeyboard);
    __defers["$.__views.generateCode!click!newOrder"] && $.__views.generateCode.addEventListener("click", newOrder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;