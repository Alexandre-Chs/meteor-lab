import "./Register.html";
import { Template } from "meteor/templating";

Template.Register.events({
  "click .js-register"() {
    console.log("click");
  },
});
