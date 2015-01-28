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
        // var token = '?access_token=d55489efbd98c9ca121c4e0c026f557d84da1442'

        // users.forEach(function(val) {
        //     document.querySelector('.userMenu').innerHTML += '<div id="' + val + '"><a href="#' + val + '">' + val + '</a></div>';
        // });

    document.querySelector('html').style.opacity = 1;
    })

}
