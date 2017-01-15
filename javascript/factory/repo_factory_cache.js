// Factory

var repoFactory = function() {
    this.getRepo = function(repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                return taskRepo;
            } else {
                var taskRepo = require('./task_repository');
                // config code here --
                return taskRepo;
            }
        }
        if (repoType === 'user') {
            var userRepo = require('./user_repository');
            return userRepo;
        }
        if (repoType === 'project') {
            var projRepo = require('./proj_repository');
            return projRepo;
        }
    }
}

module.exports = new repoFactory;
