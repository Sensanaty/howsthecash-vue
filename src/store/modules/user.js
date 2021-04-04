import { $axios } from "../../lib/axiosConfig";

const initialState = {
  loggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || "",
  user: {
    id: 0,
    username: "",
    email: ""
  }
};

const state = {...initialState};

const getters = {
  userDetails: (state) => {
    return state.user;
  },
  loggedIn: (state) => {
    return state.loggedIn;
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
    state.loggedIn = true;
    state.token = payload;
    localStorage.setItem("token", payload);
  },
  reset(state) {
    state.loggedIn = false;
    localStorage.removeItem("token");
    Object.assign(state, initialState);
  }
};

const actions = {
  async login({ commit }, payload) {
    $axios.post("/authenticate", {
        username: payload.username,
        password: payload.password
    }).then(response => {
      commit("setToken", response.data.token);
      commit("setUser", {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email
      });
    });
  },
  async logout({ commit }) {
    commit("reset");
  },
  async fetchUserInfo({ commit }) {
    $axios.get("/users").then(response => {
      commit("setUser", {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email
      });
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
