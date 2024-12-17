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
    loadBag(state, products) {
      var bag = JSON.parse(localStorage.getItem("productsInBag"));
      state.productsInBag = [...bag];
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
      localStorage.setItem(
        "productsInBag",
        JSON.stringify(state.productsInBag),
      );
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productsInBag.filter((p) => p.id !== productId);
      state.productsInBag = updatedBag;
      localStorage.setItem(
        "productsInBag",
        JSON.stringify(state.productsInBag),
      );
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
    loadBag({ commit }) {
      if (localStorage.getItem("productsInBag")) {
        commit("loadBag", JSON.parse(localStorage.getItem("productsInBag")));
      }
    },
    removeFromBag({ commit }, productId) {
      if (confirm("Are you sure you want to remove the item from bag?")) {
        commit("removeFromBag", productId);
      }
    },
  },
  modules: {},
});
