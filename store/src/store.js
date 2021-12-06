import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    categoria: "jewelery",
    produtosCategoria: [],
    carrinho: [],
    qtdCarrinho: 0,
    titulo: "Produtos",
    total: 0
  },
  mutations: {
    ATUALIZAR_PRODUTOS(state, payload) {
      state.produtos = payload;
    },
    FILTRAR_CATEGORIA(state, payload) {
      state.categoria = payload
    },
    ATUALIZAR_PRODUTOS_CATEGORIA(state, payload) {
      state.produtosCategoria = payload;
    },
    QTD_CARRINHO_ADICIONAR(state) {
      state.qtdCarrinho++
    },
    QTD_CARRINHO_REMOVER(state) {
      state.qtdCarrinho--
    },
    ADICIONAR_CARRINHO(state, payload) {
      state.carrinho.push(payload)
    },
    REMOVER_CARRINHO(state,payload) {      
      state.carrinho.splice(payload, 1)
    },
    ATUALIZAR_TITULO(state, payload) {
      state.titulo = payload
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
    }
  },
  actions: {
    filtrarProdutos(context, categoria) {
      
      let novos_produtos = context.state.produtosCategoria.filter(function(e) {
        return false;
      });
      
      context.commit('FILTRAR_CATEGORIA', categoria);
      context.commit('ATUALIZAR_PRODUTOS_CATEGORIA', novos_produtos);
      // context.commit('ATUALIZAR_TITULO', context.state.categoria);
      // context.commit('ATUALIZAR_TITULO', categoria);
    },
    // filtrarProdutos(context, categoria) {
      // let novos_produtos = context.state.produtosCategoria.filter((e) => {
      //   if( e.category === categoria) {
      //     return true
      //   } else {
      //     return false
      //   }
      // });
      // context.commit('ATUALIZAR_CATEGORIA_PRODUTOS', novos_produtos)
    // },
    removerItemDoCarrinho(context, i) {
      //context.commit('DELETAR_TOTAL_PRODUTOS', context.state.carrinho[i].price);
      context.commit('REMOVER_CARRINHO', i)
      context.commit('CALCULAR_CARRINHO');
    }
  },

});
