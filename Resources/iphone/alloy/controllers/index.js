function Controller() {
    function showLogin() {
        Alloy.createController("login").getView().open();
    }
    function showNewOrder() {
        Alloy.createController("neworder").getView().open();
    }
    function checkPage() {
        if ($.index.pageLoad) $.index.open(); else {
            $.index.close();
            showLogin();
        }
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
    $.__views.loginButton = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Login",
        id: "loginButton"
    });
    $.__views.index.add($.__views.loginButton);
    showLogin ? $.__views.loginButton.addEventListener("click", showLogin) : __defers["$.__views.loginButton!click!showLogin"] = true;
    $.__views.newOrderButton = Ti.UI.createButton({
        width: "50%",
        top: "50dp",
        title: "Get Paid",
        id: "newOrderButton"
    });
    $.__views.index.add($.__views.newOrderButton);
    showNewOrder ? $.__views.newOrderButton.addEventListener("click", showNewOrder) : __defers["$.__views.newOrderButton!click!showNewOrder"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("open", checkPage);
    $.index.pageLoad = false;
    $.index.open();
    __defers["$.__views.loginButton!click!showLogin"] && $.__views.loginButton.addEventListener("click", showLogin);
    __defers["$.__views.newOrderButton!click!showNewOrder"] && $.__views.newOrderButton.addEventListener("click", showNewOrder);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;