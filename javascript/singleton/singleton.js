// Singleton

var task_repository = (function() {
    var task_repo;
    function create_repo() {
        var task_repo = new Object('Task');
        return task_repo;
    }

    return {
        get_instance: function() {
            if(!task_repo) {
                task_repo = create_repo();
            }
            return task_repo;
        }
    };
})();

var repo_one = task_repository.get_instance();
var repo_two = task_repository.get_instance();

if (repo_one === repo_two)
    console.log("Same task_repository");
