function newOrder() {		
    var myOrders = Alloy.Collections.orders;

	if ( Alloy.Globals.currentWallet == '' ) {
		alert("Please enter your wallet name");
		closeWindow();
		Alloy.createController("login").getView().open();
		return;
	}

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
    
    //alert('value is'+$.priceField.value);
    var wallet = Alloy.Globals.currentWallet; // need to fetch merchant info here
    
    //currency.toUppercase();
    var ripple_url = 'https://ripple.com//trust?to='+wallet+'&amount='+$.priceField.value+'/'+$.currencyField.value;
        
    var ripple_url_enc = encodeURIComponent(ripple_url);
    var goog_url = 'https://chart.googleapis.com/chart?cht=qr&chl='+ripple_url_enc+'&choe=UTF-8&chs=300x300';
    
    alert(goog_url);
  	//var webview = Titanium.UI.createWebView({url:goog_url});
    //var window = Titanium.UI.createWindow();
    // window.add(webview);
    // window.open({modal:true});    
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
