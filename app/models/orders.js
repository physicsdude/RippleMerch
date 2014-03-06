exports.definition = {
	config: {
		columns: {
			"order_number" : "text",
		    "price": "text",
		    "currency": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "orders",
			idAttribute: "order_number"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};