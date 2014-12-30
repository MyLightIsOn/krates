define('templates/helpers/AlbumSortHelper', ['hbs/handlebars'], function ( Handlebars ) {
    function albumSort ( context, options ) {
        var albumList = [],
            labelList = [],
            releaseList = [],
            imageList = [],
            genre = [];

        //Gets the album name, labe, and release date attribute for all songs in collection
        for(var i = 0; i < context.length; ++i){
            albumList.push(context.models[i].attributes.album.toString());
            labelList.push(context.models[i].attributes.label.toString());
            releaseList.push(context.models[i].attributes.releaseDate.toString());
            imageList.push(context.models[i].attributes.albumImage.toString());
            genre.push(context.models[i].attributes.genre.toString());
        }

        //Function to remove duplicates from list
        function removeDups(list){

            list = list.filter(function(elem, pos){
                return list.indexOf(elem) == pos
            });

            return list;
        }

        //Creates Album list object for Handlebars
        function toObject(album, label, releaseDate, albumImage) {
            var newArray = []
            for (var i = 0; i < album.length; ++i){
                var myObj = {};

                myObj.album = album[i];
                myObj.label = label[i];
                myObj.releaseDate = releaseDate[i];
                myObj.albumImage = albumImage[i];
                myObj.genre = genre[i];

                newArray.push(myObj);
            }
            return newArray;
        }

        //Lists now have duplicates removed.
        albumList = removeDups(albumList);
        labelList = removeDups(labelList);
        releaseList = removeDups(releaseList);
        imageList = removeDups(imageList);
        genre = removeDups(genre)

        return toObject(albumList, labelList, releaseList, imageList, genre);
    }
    Handlebars.registerHelper( 'albumSort', albumSort );
    return albumSort;
});