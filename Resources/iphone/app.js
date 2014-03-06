var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.merchants = Alloy.createCollection("merchants");

Alloy.Collections.orders = Alloy.createCollection("orders");

Alloy.Globals.top = 0;

Alloy.Globals.api = [];

Alloy.Globals.api["url"] = "https://ripple-rest.herokuapp.com/api/v1";

Alloy.Globals.tableTop = "20dp";

Alloy.Globals.currentWallet = "";

Alloy.Globals.defaultWallet = "rJQL8Wm4bWUpyGFjEGeAZNFKTQVSK84ke7";

Alloy.Globals.current = [];

try {
    if (true && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
        Alloy.Globals.top = "20dp";
        Alloy.Globals.tableTop = "70dp";
    }
} catch (e) {}

Alloy.createController("index");