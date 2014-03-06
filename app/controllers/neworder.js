function newOrder() {		
    var myOrders = Alloy.Collections.orders;

    // Create a new model for the merchant collection
    var order = Alloy.createModel('orders', {
        price : $.priceField.value,
        currency : $.currencyField.value
    });

    // add new model to the global collection
    myOrders.add(order);

    // save the model to persistent storage
    order.save();

    // reload the orders
    myOrders.fetch();
    
	//var win=Alloy.createController('qrcode').getView();
	//win.open();
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
