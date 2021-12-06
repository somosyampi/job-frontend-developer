import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    produtos: "",
    categoria: "",
    carrinho: [],
    qtdCarrinho: 0,
    titulo: "Produtos",
    total: 0,
  },
  mutations: {
    ATUALIZAR_PRODUTOS(state, payload) {
      state.produtos = payload;
    },
    FILTRAR_CATEGORIA(state, payload) {
      state.categoria = payload
    },
    ATUALIZAR_TITULO(state, payload) {
      state.titulo = payload
    },
    QTD_CARRINHO(state){
      state.qtdCarrinho = 0
    },
    QTD_CARRINHO_ADICIONAR(state) {
      state.qtdCarrinho++
    },
    QTD_CARRINHO_REMOVER(state) {
      state.qtdCarrinho--
    },
    CARRINHO_VAZIO(state){
      state.carrinho = []
    },
    ADICIONAR_CARRINHO(state, payload) {
      state.carrinho.push(payload)
    },
    REMOVER_CARRINHO(state,payload) {      
      state.carrinho.splice(payload, 1)
    },
    TOTAL_PRODUTOS(state, payload){
        state.total += payload
    }, 
    DELETAR_TOTAL_PRODUTOS(state, payload){
        state.total -= parseFloat(payload);
    },
    CALCULAR_CARRINHO(state) {
      let total = 0;
      state.carrinho.forEach(function(e) {
        total += e.price;
      });
      state.total = total;
    },
    LIMPAR_TOTAL(state){
      state.total = 0;
    }
    
  },
  actions: {
    filtrarProdutos(context, categoria) {
      context.commit('FILTRAR_CATEGORIA', categoria);
      context.commit('ATUALIZAR_TITULO', categoria);
    },

    removerItemDoCarrinho(context, i) {
      context.commit('REMOVER_CARRINHO', i)
      context.commit('CALCULAR_CARRINHO')
      context.commit('QTD_CARRINHO_REMOVER')
    },

    limpar(context){
      context.commit('LIMPAR_TOTAL')
      context.commit('QTD_CARRINHO')
      context.commit('CARRINHO_VAZIO')
    }
  },
});