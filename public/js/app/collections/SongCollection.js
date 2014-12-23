// IndexCollection.js

define(["jquery", "backbone", "models/SongModel"],
	function($, Backbone, SongModel) {

		// Creates a new Backbone Collection class object
		var SongCollection = Backbone.Collection.extend({
            url: '/songs',
            parse: function(response) {
                return response
            },

			// Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
			model: SongModel
		});

		// Returns the Model class
		return SongCollection;

	}

);