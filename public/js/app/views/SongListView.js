define(["jquery", "backbone", "collections/SongCollection", "hbs!templates/layouts/SongList", "datatables"],

    function($, Backbone, SongCollection, SongList, datatables){

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
                    that.$el.html(that.template({songs: this.toJSON()}));
                    $('#song-list-table').dataTable();
                });

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return SongListView;
    }
);