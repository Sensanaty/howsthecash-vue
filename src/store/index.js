import "es6-promise";
import { createStore, createLogger } from "vuex";

import user from "./modules/user";

export const store = createStore({
    modules: {
      user
    },
    strict: import.meta.env.DEV,
    plugins: import.meta.env.DEV ? [createLogger()] : []
});
