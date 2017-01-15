// Factory

var repo = function() {
    var db = {}
    
    var get = function(id) {
        console.log('Getting project ' + id);
        return {
            name: 'new project from db'
        }
    }

    var save = function(proj)  {
        console.log('Saving ' + proj.name + ' to the db');
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();
