var Router = Backbone.Router.extend({

    routes: {
        ":name": "loaduser",
        "": "start"
    },

    loaduser: function(name) {
        document.querySelector('main').style.left = window.innerWidth + 'px';
        document.querySelector('.userMenu').style.top = 0;
        document.querySelector('html').style.opacity = 1;

        window.setTimeout(function() {

        // draw profile, draw repos
       	GitClient.draw('user', GitClient.url.user+name, GitClient.userInfo, GitClient.userInfoCheck, document.querySelector('.user'));
       	GitClient.draw('repos', GitClient.url.user+name+'/repos', GitClient.repos, GitClient.reposCheck, document.querySelector('.repoList'));
        }, 500);
        window.setTimeout(function(){
        	document.querySelector('main').style.left = 0;
        }, 600)
    },

    start: function() {
        document.querySelector('.userMenu').style.top = window.innerHeight / 3 + 'px';
        document.querySelector('main').style.left = window.innerWidth + 'px';
        document.querySelector('html').style.opacity = 1;
    },

    initialize: function() {
        window.GitClient = new GithubClient();
        console.log('initialized');
        Backbone.history.start();
    }

});

var GHRouter = new Router();
