import "es6-promise";
import { createStore, createLogger } from "vuex";

import users from "./modules/users";

export const store = createStore({
    modules: {
      users
    },
    strict: import.meta.env.DEV,
    plugins: import.meta.env.DEV ? [createLogger()] : []
});
