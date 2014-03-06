function Controller() {
    function showLogin() {
        Alloy.createController("login").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Login",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    showLogin ? $.__views.__alloyId0.addEventListener("click", showLogin) : __defers["$.__views.__alloyId0!click!showLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId0!click!showLogin"] && $.__views.__alloyId0.addEventListener("click", showLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;