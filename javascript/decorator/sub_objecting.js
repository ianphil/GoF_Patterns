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

var Urgent_Task = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
};

Urgent_Task.prototype = Object.create(Task.prototype); // Enables complete/save
Urgent_Task.prototype.notify = function() {
    console.log('Notify important people');
};
Urgent_Task.prototype.save = function() {
    this.notify();
    console.log('Do special stuff before saving');
    Task.prototype.save.call(this);
};

var ut = new Urgent_Task('This is urgent', 1);
ut.complete();
ut.save();
console.log(ut);
