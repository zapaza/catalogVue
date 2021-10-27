export default {
  actions: {
    async fetchCatalog({ commit, dispatch }, limit = 9) {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`,
      );
      const catalog = await res.json();

      dispatch('sayHello');

      commit('updateCatalog', catalog);
    },
    sayHello() {},
  },
  mutations: {
    updateCatalog(state, catalog) {
      state.catalog = catalog;
    },
    createCatalog(state, newCatalog) {
      state.catalog.unshift(newCatalog);
    },
  },
  state: {
    catalog: [],
  },
  getters: {
    validCatalog(state) {
      return state.catalog;
    },
    allCatalog(state) {
      return state.catalog;
    },
    catalogCount(state, getters) {
      return getters.validCatalog.length;
    },
  },
};
