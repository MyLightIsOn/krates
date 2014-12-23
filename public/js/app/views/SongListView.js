define(["jquery", "backbone", "collections/SongCollection", "hbs!templates/layouts/SongList"],

    function($, Backbone, SongCollection, SongList){

        var SongListView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#song-list-container",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // Renders the view's template to the UI
            render: function() {
                var that = this,
                    songsList = new SongCollection();

                that.template = SongList;
                songsList.fetch();

                songsList.on('sync', function () {
                    console.log(this.models);
                    that.$el.html(that.template({songs: this.toJSON()}));
                });

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return SongListView;
    }
);