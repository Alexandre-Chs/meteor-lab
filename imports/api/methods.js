import { Todos } from "../db/todo";

Meteor.methods({
  "tasks.insert"(name) {
    Todos.insert({ userId: this.userId, name });
  },
  "tasks.getAll"() {
    return Todos.find({ id: this.userId });
  },
  "tasks.remove"(taskId) {
    const task = Todos.findOne(taskId);
    if (task.userId !== this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Todos.remove(taskId);
  },
  "user.getAll"() {
    return Meteor.users.find().fetch();
  },
});
