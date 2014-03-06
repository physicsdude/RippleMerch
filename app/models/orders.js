exports.definition = {
	config: {
		columns: {
		    "price": "text",
		    "currency": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "orders"
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