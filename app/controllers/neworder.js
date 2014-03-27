$.currencyField.addEventListener('change', function(e) {
    Alloy.Globals.current['currency'] = e.selectedValue;
	mydebug("Price is "+$.priceField.value+" currency is "+Alloy.Globals.current['currency']);
});

function checkTransaction() {
	if ( Alloy.Globals.currentWallet == '' || typeof Alloy.Globals.current['price'] == '' ) {
		return;
	}
	var url = Alloy.Globals.api['url']+'/addresses/'+Alloy.Globals.currentWallet+'/next_notification';
	//alert('sending '+url);
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			var got = this.responseText;
			Ti.API.info("Received text: " + got);
			alert("Transaction Verification Data Received");
			//alert('got '+got);
			//var parsed = JSON.parse(got);
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			//alert('Sorry, I\'m unable to check on the payment right now.');
			alert(e.error);
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}

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
    //currency.toUppercase();
    var ripple_url = 'https://ripple.com//send?to='+Alloy.Globals.currentWallet+'&amount='+Alloy.Globals.current['price']+'&dt='+Alloy.Globals.current['currency'];
	//alert("ripple url is "+ripple_url);
    var ripple_url_enc = encodeURIComponent(ripple_url);
    var goog_url = 'https://chart.googleapis.com/chart?cht=qr&chl='+ripple_url_enc+'&choe=UTF-8&chs=300x300';
    
    //closeWindow();
    //Alloy.createController("qrcode").getView().open();

	var qrTitle = "Pay "+$.priceField.value+" "+currency+" to "+wallet; 
  	var webview = Titanium.UI.createWebView({url:goog_url, width:300, height: 300});
    var window = Titanium.UI.createWindow({backgroundColor: 'white'});
    //window.title('Testing');
	var closeBtn = Ti.UI.createLabel({text: qrTitle, top: 20, layout: 'vertical', height:44 });
	var infoBtn  = Ti.UI.createLabel({text: 'Close Window', bottom: 20, layout: 'vertical', height:44, backgroundColor:"#3372AD"});
    window.add(webview);
	window.add(infoBtn);
	window.add(closeBtn);
	window.open();
	closeBtn.addEventListener("click", function(e){
		window.close();
	    //Alloy.createController("neworder").getView().open();
	});
    window.open({modal:true});
    
    // setTimeout(function(){
    	// checkTransaction();
	// }, 5000);	
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