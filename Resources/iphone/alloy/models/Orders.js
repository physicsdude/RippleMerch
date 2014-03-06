exports.definition = {
    config: {
        columns: {
            price: "text",
            currency: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "orders"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("orders", exports.definition, []);

collection = Alloy.C("orders", exports.definition, model);

exports.Model = model;

exports.Collection = collection;