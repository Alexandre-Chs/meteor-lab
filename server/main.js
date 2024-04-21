import { Meteor } from "meteor/meteor";
import "/imports/api/methods";
import "/imports/api/todosPublications";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});

const user = Accounts.findUserByUsername(SEED_USERNAME);
