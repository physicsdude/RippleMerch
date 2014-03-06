exports.definition = {
    config: {
        columns: {
            wallet_name: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "merchants",
            idAttribute: "wallet_name"
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

model = Alloy.M("merchants", exports.definition, []);

collection = Alloy.C("merchants", exports.definition, model);

exports.Model = model;

exports.Collection = collection;