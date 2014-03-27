$.currencyField.addEventListener('change', function(e) {
    Alloy.Globals.current['currency'] = e.selectedValue;
	mydebug("Price is "+$.priceField.value+" currency is "+Alloy.Globals.current['currency']);
});

function newOrder() {		
    var myOrders = Alloy.Collections.orders;
	//$.neworder.picker.setSelectedRow(0, 1);

	if ( Alloy.Globals.currentWallet == '' ) {
		// for testing
		Alloy.Globals.currentWallet = Alloy.Globals.defaultWallet;
		//alert("Please enter your wallet name");
		//closeWindow();
		//Alloy.createController("login").getView().open();
		return;
	}

    // Create a new model for the merchant collection
    var order = Alloy.createModel('orders', {
        price : $.priceField.value,
        currency : Alloy.Globals.current['currency'].toString()
    });

    // add new model to the global collection
    myOrders.add(order);

    // save the model to persistent storage
    order.save();

    // reload the orders
    myOrders.fetch();
    
    var wallet = Alloy.Globals.currentWallet; // need to fetch merchant info here
	Alloy.Globals.current['price'] = $.priceField.value; // save for use in loop
	var price = Alloy.Globals.current['price'];
	var currency =  Alloy.Globals.current['currency'];
    if ( Alloy.Globals.current['price'].toString() == '' ) {
    	alert("Please set a price.");
    	return;
    }
    if ( typeof  Alloy.Globals.current['currency'].toString() == '' ) {
    	alert("Please choose a currency.");
    	return;
    }
    
    closeWindow();
	Alloy.createController("qrcode").getView().open();
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

// Alloy.createController("login").getView().open();