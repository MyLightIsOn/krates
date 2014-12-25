define(["jquery", "backbone", "collections/SongCollection", "hbs!templates/layouts/SongList", "hbs!templates/partials/GenreSortPartial", "templates/helpers/GenreSortHelper", "datatables"],

    function($, Backbone, SongCollection, SongList, GenreSortTemplate, GenreSort){

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
                    var sortedList = GenreSort(songsList);
                    console.log(songsList);
                    console.log(sortedList);

                    //Sends returned Mongo response to browser for Handlebars
                    that.$el.html(that.template({songs: this.toJSON()}));

                    //Creates table for data
                    $('#song-list-table').dataTable();

                    //Adds the genre filter to the left
                    $('#left-interface').append(GenreSortTemplate({genres: sortedList}));
                });

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return SongListView;
    }
);