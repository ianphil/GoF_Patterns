// Singleton

var my_repo = require('./repo');

//var repo = require('./repo'); // this doesn't create a singleton
//var my_repo = repo();

var task_handler = function() {
    return {
        save: function() {
            my_repo.save('from_task_handler');
        }
    };
};

module.exports = task_handler();
