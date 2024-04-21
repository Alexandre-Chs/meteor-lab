import { Template } from "meteor/templating";
import "./UserList.html";

Template.UsersList.helpers({
  userlist() {
    return Meteor.users.find().fetch();
  },
});

Template.UsersList.onCreated(function showUsers() {
  Meteor.subscribe("users");
});
