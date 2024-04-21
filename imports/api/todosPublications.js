import { Meteor } from "meteor/meteor";
import { Todos } from "../db/todo";

Meteor.publish("todos", function publishTasks() {
  return Todos.find();
});
