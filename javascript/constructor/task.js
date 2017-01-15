// Constructors

var Task = function(name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }

    this.save = function() {
        console.log('saving task ' + this.name);
    }
}

var task = new Task('create demo for constructors');

task.complete();
task.save();