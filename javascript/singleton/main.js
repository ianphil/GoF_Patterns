// Singleton

var task_handler = require('./task_handler');
var my_repo = require('./repo');

//var repo = require('./repo'); // this doesn't create a singleton
//var my_repo = repo();

my_repo.save('from_main');
my_repo.save('from_main');
my_repo.save('from_main');
task_handler.save();
task_handler.save();
task_handler.save();
task_handler.save();
