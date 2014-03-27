function mydebug(str) {
    if (false === Alloy.Globals.debug) return;
    Titanium.API.debug(str);
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Barcode = require("ti.barcode");

Alloy.Collections.merchants = Alloy.createCollection("merchants");

Alloy.Collections.orders = Alloy.createCollection("orders");

Alloy.Globals.top = 0;

Alloy.Globals.api = [];

Alloy.Globals.api["url"] = "https://ripple-rest.herokuapp.com/api/v1";

Alloy.Globals.tableTop = "20dp";

Alloy.Globals.currentWallet = "";

Alloy.Globals.defaultWallet = "rUs5g1WUuFJ7ZvAU3TsVkNBaV2jbm2f22a";

Alloy.Globals.current = [];

try {
    if (true && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
        Alloy.Globals.top = "20dp";
        Alloy.Globals.tableTop = "70dp";
    }
} catch (e) {}

Alloy.Globals.debug = true;

Alloy.createController("index");