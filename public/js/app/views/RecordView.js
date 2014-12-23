// IndexView.js

define(["jquery", "backbone", "models/RecordModel", "text!templates/layouts/Record.html", "hbs!templates/layouts/RecordList"],

    function($, Backbone, Model, template, RecordList){

        var RecordView = Backbone.View.extend({

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
                this.template = RecordList;

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