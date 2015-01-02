define(["jquery", "backbone"],

    function($, Backbone) {

        var Events = _.extend({

            //Initiates data tables
            createTable: function(){

                $('#song-list-table').dataTable({
                    language: {
                        search: "_INPUT_",
                        searchPlaceholder: "Search your music"
                    }
                });

            },

            //Takes a list of songs from the database and creates a table containing only songs from the selected genre
            filterByGenre: function(listToFilter, listToCreate, category, view) {

                for(var i = 0; i < listToFilter.length; ++i){

                    if(listToFilter.models[i].attributes.genre == category){
                        listToCreate[i] = listToFilter.models[i].attributes
                    }
                }
                view.$el.html(view.template({song: listToCreate}));

                Events.createTable();
            },

            //Takes a list of albums from the database and creates a table containing only albums from the selected genre
            filterByAlbum: function(listToFilter, listToCreate, category, view) {

                for(var i = 0; i < listToFilter.length; ++i){
                    if(listToFilter[i].genre == category){
                        listToCreate[i] = listToFilter[i]
                    }
                }

                view.$el.html(view.template({album: listToCreate}));

                Events.createTable();
            }

        }, Backbone.Events);

        return Events;
    }
);
