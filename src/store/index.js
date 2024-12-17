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
  },
  modules: {},
});
