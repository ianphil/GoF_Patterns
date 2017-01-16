// Decorator

var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('saving task: ' + this.name);
}

var my_task = new Task('Legacy Task');
my_task.complete();
my_task.save();

var urgent_task = new Task('Urgent Task');
urgent_task.priority = 2;
urgent_task.notify = function() {
    console.log('Notify important people');
};
urgent_task.complete();
urgent_task.save = function() {
    this.notify();
    Task.prototype.save.call(this);
};
urgent_task.save();
