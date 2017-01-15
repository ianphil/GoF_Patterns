// Module

var Task = require('./task');
var Repo = require('./task_repository');

var task = new Task({name: 'create demo for constructors'});

task.complete();
task.save();

var task_two = new Task(Repo.get(1));

task_two.complete();
task_two.save();
