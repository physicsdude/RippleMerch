function Controller() {
    function newOrder() {
        var myOrders = Alloy.Collections.orders;
        if ("" == Alloy.Globals.currentWallet) {
            alert("Please enter your wallet name");
            closeWindow();
            Alloy.createController("login").getView().open();
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
        var ripple_url = "https://ripple.com//trust?to=" + wallet + "&amount=" + $.priceField.value + "/" + $.currencyField.value;
        var ripple_url_enc = encodeURIComponent(ripple_url);
        var goog_url = "https://chart.googleapis.com/chart?cht=qr&chl=" + ripple_url_enc + "&choe=UTF-8&chs=300x300";
        alert(goog_url);
    }
    function focusTextField() {
        $.priceField.focus();
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
    focusTextField ? $.__views.newOrderWin.addEventListener("open", focusTextField) : __defers["$.__views.newOrderWin!open!focusTextField"] = true;
    $.__views.label = Ti.UI.createLabel({
        top: 25,
        text: "New Sale",
        id: "label"
    });
    $.__views.newOrderWin.add($.__views.label);
    $.__views.priceField = Ti.UI.createTextField({
        width: "90%",
        top: "35dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "priceField",
        hintText: "Price"
    });
    $.__views.newOrderWin.add($.__views.priceField);
    closeKeyboard ? $.__views.priceField.addEventListener("return", closeKeyboard) : __defers["$.__views.priceField!return!closeKeyboard"] = true;
    $.__views.currencyField = Ti.UI.createPicker({
        width: "90%",
        top: "50",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "currencyField",
        selectionIndicator: "true",
        useSpinner: "false"
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
        id: "__alloyId4"
    });
    $.__views.column1.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "EUR",
        id: "__alloyId5"
    });
    $.__views.column1.addRow($.__views.__alloyId5);
    $.__views.currencyField.add(__alloyId1);
    $.__views.__alloyId6 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Show QR Code",
        id: "__alloyId6"
    });
    $.__views.newOrderWin.add($.__views.__alloyId6);
    newOrder ? $.__views.__alloyId6.addEventListener("click", newOrder) : __defers["$.__views.__alloyId6!click!newOrder"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.newOrderWin!open!focusTextField"] && $.__views.newOrderWin.addEventListener("open", focusTextField);
    __defers["$.__views.priceField!return!closeKeyboard"] && $.__views.priceField.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId6!click!newOrder"] && $.__views.__alloyId6.addEventListener("click", newOrder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;