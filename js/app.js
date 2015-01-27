window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }, {
            url: "./bower_components/backbone/backbone.js"
        }, {
            url: "./js/github.js"
        }, {
            url: "./js/bbsetup.js"
        }
    ).then(function() {
        // start app?

        // move menu to center for load


        // set up backbone
        var users = ['arbolkiri', 'maprules1000', 'Jrharper0592', 'firehawk09', 'dorshinho', 'kawill', 'aallen-dev', 'cjros', 'pmarsh41', 'bmagnantb'];

        users.forEach(function(val) {
            document.querySelector('.userMenu').innerHTML += '<div id="' + val + '"><a href="#' + val + '">' + val + '</a></div>';
        });

    })

}
