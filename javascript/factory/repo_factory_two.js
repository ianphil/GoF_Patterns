// Factory

var repoFactory = function() {
    var repos = this;
    var repoList = [
        {name:'task', source:'./task_repository'},
        {name:'user', source:'./user_repository'},
        {name:'project', source:'./proj_repository'}
    ];

    repoList.forEach(function(repo) {
        repos[repo.name] = require(repo.source);
    });
}

module.exports = new repoFactory;
