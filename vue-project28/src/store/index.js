import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        let response = await fetch("https://thotyelwa5.github.io/28junefirst1/product.json");
        let products = await response.json();
        commit('setProducts', products);
      } catch (error) {
        console.error("Error", error);
      }
    },
  },
  modules: {
  },
});

