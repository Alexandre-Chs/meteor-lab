import { Todos } from "../db/todo";

Meteor.methods({
  "tasks.insert"(name) {
    Todos.insert({ id: this.userId, name });
  },
  "tasks.getAll"() {
    return Todos.find({ id: this.userId });
  },
});
