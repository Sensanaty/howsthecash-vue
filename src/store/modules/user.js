import { $axios } from "../../lib/axiosConfig";
import { router } from "../../router";

const initialState = {
  loggedIn: false,
  token: "",
  user: {
    id: 0,
    username: "",
    email: "",
  },
  error: {
    message: "",
    status: null,
  },
};

const state = {...initialState};

const getters = {
  userDetails: (state) => {
    return state.user;
  },
  loggedIn: (state) => {
    return state.loggedIn;
  },
  token: (state) => {
    return state.token;
  },
  error: (state) => {
    return state.error;
  }
};

const mutations = {
  set(state, payload) {
    state[payload.key] = payload.data;
  },
  setUser(state, payload) {
    state.user = {
      id: payload.id,
      username: payload.username,
      email: payload.email
    };
  },
  setToken(state, payload) {
    state.token = payload;
    if (typeof state.token !== "undefined") {
      state.loggedIn = true;
    }
    localStorage.setItem("token", payload);
  },
  setError(state, payload) {
    state.error = {
      message: payload.message,
      status: payload.status
    };
  },
  reset(state) {
    localStorage.removeItem("token");
    Object.assign(state, initialState);
  },
  resetError(state) {
    state.error = {
      message: "",
      status: null
    };
  }
};

const actions = {
  async login({ commit }, payload) {
    $axios.post("/authenticate", {
        username: payload.username,
        password: payload.password
    }).then(response => {
      commit("resetError");
      commit("setToken", response.data.token);
      commit("setUser", {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email
      });
      router.push({ path: "/" });
    }).catch(error => {
      commit("setError", {
        message: error.response.data.error,
        status: error.response.status
      });
    });
  },
  async signup({ commit }, payload) {
    $axios.post("/users", {
      username: payload.username,
      password: payload.password,
      email: payload.email || ""
    }).then(response => {
      commit("resetError");
      commit("setToken", response.data.token);
      commit("setUser", {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email
      });
      router.push({ path: "/dashboard" });
    });
  },
  async logout({ commit }) {
    commit("reset");
    await router.push("/");
  },
  async fetchUserInfo({ commit }) {
    $axios.get("/users").then(response => {
      commit("setUser", {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email
      });
      commit("setToken", localStorage.getItem("token"));
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
