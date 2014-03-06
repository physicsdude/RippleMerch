exports.definition = {
    config: {
        columns: {
            order_number: "text",
            price: "text",
            currency: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "orders",
            idAttribute: "order_number"
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