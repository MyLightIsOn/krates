// IndexView.js

define(["jquery", "backbone", "models/RecordModel", "hbs!templates/layouts/form"],

    function($, Backbone, Model, template){

        var FormView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".magic",

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

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html( template());

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return FormView;
    }
);