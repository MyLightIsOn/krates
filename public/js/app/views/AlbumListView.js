define(["jquery", "backbone", "collections/SongCollection", "hbs!templates/layouts/AlbumList", "hbs!templates/partials/GenreSortPartial", "templates/helpers/GenreSortHelper", "templates/helpers/AlbumSortHelper", "events/Events", "datatables"],

    function($, Backbone, SongCollection, AlbumList, GenreSortTemplate, GenreSort, AlbumSort, Events){

        var AlbumListView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#song-list-container",

            // View constructor
            initialize: function() {
                //Clears genre list so it can be appended on render.
                $('#genre-list-container').remove();

                // Calls the view's render method
                this.render();

            },

            // Renders the view's template to the UI
            render: function() {

                var that = this,
                    songsList = new SongCollection();

                that.template = AlbumList;
                songsList.fetch();

                songsList.on('sync', function () {
                    var sortedList = GenreSort(songsList),
                        albumList = AlbumSort(songsList);

                    //Sends returned Mongo response to browser for Handlebars
                    that.$el.html(that.template({album: albumList}));

                    //Creates table for data
                    Events.createTable();

                    //Adds the genre filter to the left
                    $('#left-interface').append(GenreSortTemplate({genre: sortedList}));

                    //Filters table by genre
                    $('.genre').on('click', function(){
                        var selectedGenre = this.innerHTML,
                            genreAlbumList = {};

                        Events.filterByAlbum(albumList, genreAlbumList, selectedGenre, that);

                        //Adds arrow to selected genre
                        $('.genre').removeClass('selected');
                        $(this).addClass('selected');
                    });

                    //Removes filter and resets view
                    $('.all').on('click', function(){
                        that.$el.html(that.template({album: albumList}));

                        //Creates table for data
                        Events.createTable();

                    });
                });

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return AlbumListView;
    }
);