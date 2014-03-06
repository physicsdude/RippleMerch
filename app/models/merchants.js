exports.definition = {
	config: {
		columns: {
		    "wallet_name": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "merchants"
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