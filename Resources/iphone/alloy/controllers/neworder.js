function Controller() {
    function newOrder() {
        var myOrders = Alloy.Collections.orders;
        var order = Alloy.createModel("orders", {
            order_number: $.orderNumberField.value,
            price: $.priceField.value,
            currency: $.currencyField.value
        });
        myOrders.add(order);
        order.save();
        myOrders.fetch();
        closeWindow();
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
        layout: "vertical",
        barColor: "#a00",
        id: "newOrderWin",
        title: "New Order",
        modal: "true"
    });
    $.__views.newOrderWin && $.addTopLevelView($.__views.newOrderWin);
    focusTextField ? $.__views.newOrderWin.addEventListener("open", focusTextField) : __defers["$.__views.newOrderWin!open!focusTextField"] = true;
    $.__views.label = Ti.UI.createLabel({
        text: "New Sale",
        id: "label"
    });
    $.__views.newOrderWin.add($.__views.label);
    $.__views.orderNumberField = Ti.UI.createTextField({
        width: "90%",
        top: "25dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "orderNumberField",
        hintText: "Order Number"
    });
    $.__views.newOrderWin.add($.__views.orderNumberField);
    closeKeyboard ? $.__views.orderNumberField.addEventListener("return", closeKeyboard) : __defers["$.__views.orderNumberField!return!closeKeyboard"] = true;
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
    $.__views.currencyField = Ti.UI.createTextField({
        width: "90%",
        top: "40dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "currencyField",
        hintText: "Currency"
    });
    $.__views.newOrderWin.add($.__views.currencyField);
    closeKeyboard ? $.__views.currencyField.addEventListener("return", closeKeyboard) : __defers["$.__views.currencyField!return!closeKeyboard"] = true;
    $.__views.__alloyId1 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Create QR Code",
        id: "__alloyId1"
    });
    $.__views.newOrderWin.add($.__views.__alloyId1);
    newOrder ? $.__views.__alloyId1.addEventListener("click", newOrder) : __defers["$.__views.__alloyId1!click!newOrder"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.newOrderWin!open!focusTextField"] && $.__views.newOrderWin.addEventListener("open", focusTextField);
    __defers["$.__views.orderNumberField!return!closeKeyboard"] && $.__views.orderNumberField.addEventListener("return", closeKeyboard);
    __defers["$.__views.priceField!return!closeKeyboard"] && $.__views.priceField.addEventListener("return", closeKeyboard);
    __defers["$.__views.currencyField!return!closeKeyboard"] && $.__views.currencyField.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId1!click!newOrder"] && $.__views.__alloyId1.addEventListener("click", newOrder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;