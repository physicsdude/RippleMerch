function newOrder() {		
    var myOrders = Alloy.Collections.orders;
	//$.neworder.picker.setSelectedRow(0, 1, false);

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
    
    var wallet = Alloy.Globals.currentWallet; // need to fetch merchant info here
    
    //currency.toUppercase();
    //var ripple_url = 'https://ripple.com//trust?to='+wallet+'&amount='+$.priceField.value+'/'+$.currencyField.value;
    var ripple_url = 'https://ripple.com//trust?to='+wallet+'&amount='+$.priceField.value+'/USD';

    var ripple_url_enc = encodeURIComponent(ripple_url);
    var goog_url = 'https://chart.googleapis.com/chart?cht=qr&chl='+ripple_url_enc+'&choe=UTF-8&chs=300x300';
    
    closeWindow();
    //Alloy.createController("qrcode").getView().open();

	var qrTitle = "Pay "+$.priceField.value+" "+$.currencyField.value+" to "+wallet; 
  	var webview = Titanium.UI.createWebView({url:goog_url, width:300, height: 300});
    var window = Titanium.UI.createWindow({backgroundColor: 'white'});
    //window.title('Testing');
	var closeBtn = Ti.UI.createLabel({text: qrTitle+"    [Close]", textAlign: "center", top:0, left:-100, width: 600, height:44, backgroundColor:"#ccc"});
    window.add(webview);
	window.add(closeBtn);
	window.open();
	closeBtn.addEventListener("click", function(e){
		window.close();
	    Alloy.createController("neworder").getView().open();
	});
    window.open({modal:true});
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
