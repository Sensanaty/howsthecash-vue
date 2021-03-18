const state = () => ({
    loggedIn: false,
    preferredCurrency: "USD"
});

const getters = {
    loggedIn: (state) => {
        return state.loggedIn;
    }
};

const mutations = {
    setLogin(state) {
        state.loggedIn = true;
    }
};

const actions = {
    async loginUser() {
        return true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
