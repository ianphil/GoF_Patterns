// Factory

var Repo = require('./task_repository');

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
    this.user = data.user;
    this.project = data.project;
}

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    Repo.save(this);
}

module.exports = Task;
