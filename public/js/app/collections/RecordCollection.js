// IndexCollection.js

define(["jquery", "backbone", "models/RecordModel"],
	function($, Backbone, Model) {

		// Creates a new Backbone Collection class object
		var RecordCollection = Backbone.Collection.extend({
            url: '/songs',
            parse: function(response) {
                console.log(response);
            },

			// Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
			model: Model
		});

		// Returns the Model class
		return RecordCollection;

	}

);