var Router = Backbone.Router.extend({

    routes: {
        ":name": "loaduser",
        "": "start"
    },

    loaduser: function(name) {
        // write GithubClient
        document.querySelector('main').style.left = window.innerWidth + 'px';
        document.querySelector('.userMenu').style.top = 0;
        window.setTimeout(function() {
        	new GithubClient(name);
        }, 500);
        document.querySelector('html').style.opacity = 1;
    },

    start: function() {
        document.querySelector('.userMenu').style.top = window.innerHeight / 3 + 'px';
        document.querySelector('main').style.left = window.innerWidth + 'px';
        document.querySelector('html').style.opacity = 1;
    },

    initialize: function() {
        Backbone.history.start();
    }

});

var GHRouter = new Router();
