import { Meteor } from "meteor/meteor";

Meteor.publish("users", function publishUsers() {
  return Meteor.users.find(
    { username: { $ne: this.userId } },
    { fields: { username: 1 } }
  );
});
