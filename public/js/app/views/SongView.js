define(["jquery", "backbone", "models/SongModel", "hbs!templates/partials/Song"],

    function($, Backbone, SongModel, SongTemplate){

        var SongView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".song-item",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // Renders the view's template to the UI
            render: function() {


                // Setting the view's template property using the Underscore template method
                this.template = SongTemplate;

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return SongView;
    }
);
