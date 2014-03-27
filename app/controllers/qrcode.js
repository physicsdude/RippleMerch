var args = arguments[0] || {};

$.qrcode.addEventListener('open', checkPage);
function checkPage() {
    //currency.toUppercase();
    var ripple_url = 'https://ripple.com//send?to='+Alloy.Globals.currentWallet+'&amount='+Alloy.Globals.current['price']+'&dt='+Alloy.Globals.current['currency'];
    //alert("ripple url is "+ripple_url);
    var ripple_url_enc = encodeURIComponent(ripple_url);
    var goog_url = 'https://chart.googleapis.com/chart?cht=qr&chl='+ripple_url_enc+'&choe=UTF-8&chs=300x300';
    var qrTitle = "Pay "+Alloy.Globals.current['price']+" "+Alloy.Globals.current['currency']+" to "+Alloy.Globals.currentWallet; 
    	var webview = Titanium.UI.createWebView({url:goog_url, width:300, height: 300});
    var window = Titanium.UI.createWindow({backgroundColor: 'white'});
    //window.title('Testing');
    var infoBtn  = Ti.UI.createLabel({text: qrTitle, top: 20, layout: 'vertical', height:44 });
    var closeBtn = Ti.UI.createLabel({text: 'Close Window', bottom: 20, layout: 'vertical', height:44, backgroundColor:"#3372AD"});
    window.add(webview);
    window.add(infoBtn);
    window.add(closeBtn);
    window.open();
    closeBtn.addEventListener("click", function(e){
    	window.close();
        Alloy.createController("neworder").getView().open();
    });
    //window.open({modal:true});

    setTimeout(function(){
    	checkTransaction();
    }, 5000);
}

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