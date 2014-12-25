define('templates/helpers/GenreSortHelper', ['hbs/handlebars'], function ( Handlebars ) {
    function genreSort ( context, options ) {
            var genreList = [],
                sortedList = [];

            //Gets the genre attribute for all songs in collection
            for(var i = 0; i < context.length; ++i){
                genreList.push(context.models[i].attributes.genre.toString());
            }

            function sortList(){

                //Removes duplicate genres from the list
                sortedList = genreList.filter(function(elem, pos){
                    return genreList.indexOf(elem) == pos
                });

                //Turns array into key/value pairs for Handlebars
                function toObject(arr) {
                    var myObj = {};
                    for (var i = 0; i < arr.length; ++i)
                        myObj[i] = arr[i];
                    return myObj;
                }
                return toObject(sortedList);
            }
            sortList();

        return sortList()
    }
    Handlebars.registerHelper( 'genreSort', genreSort );
    return genreSort;
});