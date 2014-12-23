// IndexView.js

define(["jquery", "backbone", "collections/RecordCollection", "hbs!templates/layouts/RecordList"],

    function($, Backbone, Collection, template){

        var RecordView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#main-container",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {
                var songs = new Collection();
                songs.fetch(function(songs){
                    console.log(songs)
                });

                // Setting the view's template property using the Underscore template method
                this.template = template;

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return RecordView;
    }
);