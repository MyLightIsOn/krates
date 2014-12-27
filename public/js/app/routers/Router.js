// Router.js

define(["jquery", "backbone", "models/SongModel", "views/SongListView", "views/AlbumListView"],

    function($, Backbone, SongModel, SongListView, AlbumListView) {

        var Router = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {
                // When there is no hash on the url, the home method is called
                "": "index",
                "songs": "songs",
                "albums": "albums"
            },

            index: function() {
                // Instantiates a new view which will render the header text to the page
                new SongListView();
            },

            songs: function(){
                $('.song-view-toggle').addClass('selected');
                $('.album-view-toggle').removeClass('selected');

                new SongListView()
            },

            albums: function(){
                $('.song-view-toggle').removeClass('selected');
                $('.album-view-toggle').addClass('selected');

                new AlbumListView()
            }
        });

        // Returns the DesktopRouter class
        return Router;

    }

);