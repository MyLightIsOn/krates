// Router.js

define(["jquery", "backbone", "models/RecordModel", "views/FormView", "views/RecordView", "collections/RecordCollection"],

    function($, Backbone, Model, FormView, View, Collection) {

        var Router = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {
                // When there is no hash on the url, the home method is called
                "": "index",
                "/form" : "form"
            },

            index: function() {
                // Instantiates a new view which will render the header text to the page
                new FormView();
            },

            form: function() {
                new FormView();
            }

        });

        // Returns the DesktopRouter class
        return Router;

    }

);