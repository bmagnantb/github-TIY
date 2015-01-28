;
(function() {

    function GithubClient() {
        this.users = [];
        this.userInfo = [];
        this.repos = [];
        var self = this;
        this.draw('menu', this.url.users, this.users, this.usersCheck, document.querySelector('.userMenu'));
    }

    GithubClient.prototype = {
        url: {
            users: 'https://api.github.com/orgs/TIY-Houston-Front-End-Engineering/members',
            user: 'https://api.github.com/users/'
        },

        data: function(url, dataCheck, callback) {
            var x = $.Deferred();

            var y = callback(dataCheck);

            if (y.length > 0 || y.login === location.hash.substr(1)) {
            		console.log('no download!');
                x.resolve(y);
            } else {
                var p = $.get(url + '?access_token=d55489efbd98c9ca121c4e0c026f557d84da1442');
                p.then(function(a) {
                    x.resolve(a);
                    y = a;
                    if (y instanceof Array) {
                        if (y[0].login === undefined) {
                            var hash = location.hash.substr(1);
                            var obj = {};
                            obj[hash] = y;
                            dataCheck.push(obj);
                        } else {
                            dataCheck = y;
                        }
                    } else if (y instanceof Object) {
                        dataCheck.push(y);
                    }
                })
            }
            return x;
        },

        template: function(template) {
            return $.get('./templates/' + template + '.html').then(function(a) {
                return a
            });
        },

        draw: function(template, url, dataCheck, callback, html) {
            $.when(
                this.data(url, dataCheck, callback),
                this.template(template)
            ).then(function(data, template) {
                html.innerHTML = _.template(template, {
                    data: data
                });
            });
        },

        usersCheck: function(dataCheck) {
            return dataCheck.length;
        },

        userInfoCheck: function(dataCheck) {
            var a = dataCheck.filter(function(user) {
                return user.login === location.hash.substr(1);
            });
            if (a.length > 0) {
                a = a[0];
            }
            return a;
        },

        reposCheck: function(dataCheck) {
        		var a = location.hash.substr(1);
            var b = dataCheck.filter(function(user) {
                return user.hasOwnProperty(location.hash.substr(1));
            });
            if (b.length > 0) {
            	return b[0][a];
            } else {
            	return b;
            }

        }
    }

    window.GithubClient = GithubClient;

})();
