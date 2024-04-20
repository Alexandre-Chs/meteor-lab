import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import "./Home.html";

Template.logout.events({
  "click .js-logout"() {
    console.log("logout here ! ");
    Meteor.logout();
  },
});
