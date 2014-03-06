var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.merchants = Alloy.createCollection("merchants");

Alloy.Collections.orders = Alloy.createCollection("orders");

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

Alloy.Globals.currentWallet = "";

Alloy.Globals.current = [];

try {
    if (true && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
        Alloy.Globals.top = "20dp";
        Alloy.Globals.tableTop = "70dp";
    }
} catch (e) {}

Alloy.createController("index");