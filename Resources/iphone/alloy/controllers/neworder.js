function Controller() {
    function newOrder() {
        var myOrders = Alloy.Collections.orders;
        if ("" == Alloy.Globals.currentWallet) {
            Alloy.Globals.currentWallet = Alloy.Globals.defaultWallet;
            return;
        }
        var order = Alloy.createModel("orders", {
            price: $.priceField.value,
            currency: Alloy.Globals.current["currency"].toString()
        });
        myOrders.add(order);
        order.save();
        myOrders.fetch();
        Alloy.Globals.currentWallet;
        Alloy.Globals.current["price"] = $.priceField.value;
        Alloy.Globals.current["price"];
        Alloy.Globals.current["currency"];
        if ("" == Alloy.Globals.current["price"].toString()) {
            alert("Please set a price.");
            return;
        }
        if ("" == typeof Alloy.Globals.current["currency"].toString()) {
            alert("Please choose a currency.");
            return;
        }
        closeWindow();
        Alloy.createController("qrcode").getView().open();
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
    $.__views.currencyColumn1 = Ti.UI.createPickerColumn({
        id: "currencyColumn1"
    });
    __alloyId1.push($.__views.currencyColumn1);
    $.__views.__alloyId2 = Ti.UI.createPickerRow({
        title: "XRP",
        id: "__alloyId2"
    });
    $.__views.currencyColumn1.addRow($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "BTC",
        id: "__alloyId3"
    });
    $.__views.currencyColumn1.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "LTC",
        id: "__alloyId4"
    });
    $.__views.currencyColumn1.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "PPC",
        id: "__alloyId5"
    });
    $.__views.currencyColumn1.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "EUR",
        id: "__alloyId6"
    });
    $.__views.currencyColumn1.addRow($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        title: "USD",
        id: "__alloyId7"
    });
    $.__views.currencyColumn1.addRow($.__views.__alloyId7);
    $.__views.currencyField.add(__alloyId1);
    $.__views.generateCode = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Get Paid",
        id: "generateCode"
    });
    $.__views.newOrderWin.add($.__views.generateCode);
    newOrder ? $.__views.generateCode.addEventListener("click", newOrder) : __defers["$.__views.generateCode!click!newOrder"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.currencyField.addEventListener("change", function(e) {
        Alloy.Globals.current["currency"] = e.selectedValue;
        mydebug("Price is " + $.priceField.value + " currency is " + Alloy.Globals.current["currency"]);
    });
    __defers["$.__views.priceField!return!closeKeyboard"] && $.__views.priceField.addEventListener("return", closeKeyboard);
    __defers["$.__views.generateCode!click!newOrder"] && $.__views.generateCode.addEventListener("click", newOrder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;