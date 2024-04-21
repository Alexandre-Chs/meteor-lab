import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import "./Home.html";
import "../tasks/Tasks.js";

Template.logout.events({
  "click .js-logout"() {
    console.log("logout here ! ");
    Meteor.logout();
  },
});

Template.Home.helpers({
  getUserName() {
    return Meteor.user().username;
  },
});
