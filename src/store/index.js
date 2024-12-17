import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //dados
    products: [],
    productsInBag: [],
  },
  mutations: {
    fetchProducts(state, products) {
      console.log(products);
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productsInBag.filter((p) => p.id !== productId);
      state.productsInBag = updatedBag;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("fetchProducts", response.data);
      });
    },
    addToBag({ commit }, product) {
      commit("addToBag", product);
    },
    removeFromBag({ commit }, productId) {
      commit("removeFromBag", productId);
    },
  },
  modules: {},
});
