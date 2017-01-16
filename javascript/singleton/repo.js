// Singleton

var repo = function() {
    var called = 0;

    var save = function(task) {
        called++;
        console.log('Saving ' + task + 
                    'Called ' + called + ' times');
    };

    console.log('newing up task repo');

    return {
        save: save
    };
};

// module.exports = repo; // this doesn't create a singleton

// Both of these options creates a singleton per node docs
// module.exports = repo();
module.exports = new repo;
