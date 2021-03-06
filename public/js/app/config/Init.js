// Init.js
// =======

require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // ==============

      "jquery": "libs/jquery/dist/jquery",

      "underscore": "libs/lodash/dist/lodash",

      "backbone": "libs/backbone/backbone",

      "handlebars" : "libs/handlebars/handlebars",

      "datatables" : "libs/datatables/media/js/jquery.dataTables",

      // Plugins
      // =======

      hbs: 'libs/require-handlebars-plugin/hbs',

      "backbone.validateAll": "libs/plugins/Backbone.validateAll",

      "text": "libs/text/text",

      // Application Folders
      // ===================

      "collections": "app/collections",

      "models": "app/models",

      "routers": "app/routers",

      "templates": "app/templates",

      "views": "app/views",

      "events": "app/events"

  },


    hbs: { // optional
        helpers: true,            // default: true
        i18n: false,              // default: false
        templateExtension: 'handlebars', // default: 'hbs'
        partialsUrl: 'app/templates/partials'           // default: ''
    },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {


      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },

      "datatables": ['jquery'],

      'handlebars' : {
          'exports' : 'Handlebars'
      },

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"]

  }

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "routers/Router", "backbone.validateAll"],

  function($, Backbone, Router) {

    // Instantiates a new Desktop Router instance
    new Router();

  }

);
