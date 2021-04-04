import { $axios } from "../../lib/axiosConfig";

const state = () => ({
  loggedIn: false,
  token: "",
  user: {
    id: 0,
    username: "",
    email: ""
  }
});

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
    state.token = payload;
    localStorage.setItem("token", payload);
    state.loggedIn = true;
  }
};

const actions = {
  async login( { commit }, payload) {
    $axios.post("/authenticate", {
        username: payload.username,
        password: payload.password
    }).then(response => {
      commit("setToken", response.data.token);
      commit("set", { key: "user", data: {
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email
      }});
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
