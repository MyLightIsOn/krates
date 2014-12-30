define(["jquery", "backbone", "collections/SongCollection", "hbs!templates/layouts/AlbumList", "hbs!templates/partials/GenreSortPartial", "templates/helpers/GenreSortHelper", "templates/helpers/AlbumSortHelper", "datatables"],

    function($, Backbone, SongCollection, AlbumList, GenreSortTemplate, GenreSort, AlbumSort){

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
                    $('#song-list-table').dataTable();

                    //Adds the genre filter to the left
                    $('#left-interface').append(GenreSortTemplate({genre: sortedList}));

                    //Filters table by genre
                    $('.genre').on('click', function(){
                        var selectedGenre = this.innerHTML,
                            genreAlbumList = {};

                        for(var i = 0; i < albumList.length; ++i){
                            if(albumList[i].genre == selectedGenre){
                                genreAlbumList[i] = albumList[i]
                            }
                        }

                        that.$el.html(that.template({album: genreAlbumList}));

                        //Creates table for data
                        $('#song-list-table').dataTable();
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