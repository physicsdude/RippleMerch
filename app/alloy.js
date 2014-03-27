// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//

// Alloy.Globals.someGlobalFunction = function(){};
if (OS_IOS || OS_ANDROID) {
	Alloy.Globals.Barcode = require('ti.barcode');
	Alloy.Collections.merchants = Alloy.createCollection('merchants');
	Alloy.Collections.orders    = Alloy.createCollection('orders');
	Alloy.Globals.top = 0;
	Alloy.Globals.api = [];
	Alloy.Globals.api['url'] = "https://ripple-rest.herokuapp.com/api/v1";
	Alloy.Globals.tableTop = '20dp';
	Alloy.Globals.currentWallet = '';
	Alloy.Globals.defaultWallet = 'rUs5g1WUuFJ7ZvAU3TsVkNBaV2jbm2f22a';
	Alloy.Globals.current = [];

	try {
		// check for iOS7
		if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
			Alloy.Globals.top = '20dp';
			Alloy.Globals.tableTop = '70dp';
		}
	} catch(e) {
		// catch and ignore
	}
}

Alloy.Globals.debug = true;
function mydebug(str) {
  if ( Alloy.Globals.debug === false ) 
   return;
   Titanium.API.debug(str);
}