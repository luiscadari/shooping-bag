import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //dados
    products: [],
  },
  mutations: {
    fetchProducts(state, products) {
      console.log(products);
      state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("fetchProducts", response.data);
      });
    },
  },
  modules: {},
});
