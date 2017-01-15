// Factory

var Task = require('./task');
var TaskRepo = require('./task_repository');
var UserRepo = require('./user_repository');
var ProjRepo = require('./proj_repository');

var task_one = new Task(TaskRepo.get(1));

var user = UserRepo.get(1);
var proj = ProjRepo.get(1);

task_one.user = user;
task_one.project = proj;

console.log(task_one);
task_one.save();
