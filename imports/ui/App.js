import { Template } from "meteor/templating";
import "./App.html";
import "./home/Home.js";
import "./login/Login.js";

const user = () => Meteor.user();
const isLogged = () => !!user();

Template.App.helpers({
  isUserLogged() {
    return isLogged();
  },
});

Template.login_form.events({
  "submit .js-submit"(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    Meteor.loginWithPassword(username, password);
  },
});
