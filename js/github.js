function GithubClient(username, token) {
    this.username = username;
    this.drawToPage();
}

GithubClient.prototype.getUserInfo = function() {
    return $.get('https://api.github.com/users/' + this.username + '?access_token=d55489efbd98c9ca121c4e0c026f557d84da1442');
};

GithubClient.prototype.getReposInfo = function() {
    return $.get("https://api.github.com/users/" + this.username + '/repos?access_token=d55489efbd98c9ca121c4e0c026f557d84da1442');
};

GithubClient.prototype.getTemplate1 = function() {
    return $.get('./templates/userinfo.html');
};

GithubClient.prototype.getTemplate2 = function() {
    return $.get('./templates/repos.html');
};

GithubClient.prototype.getAllData = function() {
    return $.when(this.getUserInfo(), this.getReposInfo(), this.getTemplate1(), this.getTemplate2());
};


GithubClient.prototype.drawToPage = function() {
    var self = this.username;
    this.getAllData().then(function(dataUser, dataRepos, tempUser, tempRepos) {
        // stop errors if undefined properties
        if (!dataUser[0].email) {
            dataUser[0].email = '';
        }
        if (!dataUser[0].location) {
            dataUser[0].location = '';
        }
        if (!dataUser[0].blog) {
            dataUser[0].blog = '';
        }

        // write data
        var main = document.querySelector('main');
        main.innerHTML = '<div class="userData ' + self + '">';
        document.querySelector('.' + self).innerHTML = _.template(tempUser[0], dataUser[0]);
        dataRepos[0].sort(function(a, b) {
            return (a.updated_at > b.updated_at) ? -1 : 1;
        })
        dataRepos[0].forEach(function(val, ind, arr) {
            val.updated_at = (new Date(Date.parse(val.updated_at))).toDateString().slice(4);
            document.querySelector('.' + self + '>.repoList').innerHTML += _.template(tempRepos[0], val);
        })
        main.innerHTML += "</div></div>"
    })
};
