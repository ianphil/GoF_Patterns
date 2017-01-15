// Factory

var Task = require('./task');
// var RepoFactory = require('./repo_factory');
var RepoFactory = require('./repo_factory_cache');

var task_one = new Task(RepoFactory.getRepo('task').get(1));
var task_two = new Task(RepoFactory.getRepo('task').get(2));

var user = RepoFactory.getRepo('user').get(1);
var proj = RepoFactory.getRepo('project').get(1);

task_one.user = user;
task_one.project = proj;

console.log(task_one);
task_one.save();
