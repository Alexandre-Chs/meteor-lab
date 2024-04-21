import "./Tasks.html";
import { Template } from "meteor/templating";
import { Todos } from "/imports/db/todo";

Template.show_tasks.onCreated(function showTasks() {
  Meteor.subscribe("todos");
});

Template.form_task.events({
  "submit .js-submit-task"(event) {
    event.preventDefault();
    const name = event.target.task.value;
    Meteor.call("tasks.insert", name);
  },
});

Template.show_tasks.events({
  "click .js-delete"(event) {
    const taskId = event.target.getAttribute("data-id");
    Meteor.call("tasks.remove", taskId);
  },
});

Template.show_tasks.helpers({
  todos() {
    return Todos.find();
  },
});
