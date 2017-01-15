// Factory

var Task = require('./task');
var RepoFactory = require('./repo_factory_two');

var task_one = new Task(RepoFactory.task.get(1));
var task_two = new Task(RepoFactory.task.get(2));

var user = RepoFactory.user.get(1);
var proj = RepoFactory.project.get(1);

task_one.user = user;
task_one.project = proj;

console.log(task_one);
task_one.save();
