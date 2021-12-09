<template>
  <section>
    <div 
      v-if="produto" 
      class="produto">
      <ul 
        class="fotos" 
        v-if="produto.image">
        <li >
          <img 
          :src="produto.image" 
          :alt="produto.image"
        >
        </li>
      </ul>
      <div 
        class="titulo"
      >
        <h1>{{produto.title}}</h1>
        <p 
          class="preco"
        >
          {{produto.price | numeroPreco}}
        </p>
        <p 
          class="descricao"
        >
          {{produto.description}}
        </p>
      </div>
      <div 
        class="qtdItens"
      >
        <h3>
          <span>Quantidade de itens:</span>
          <span>{{qtdItens}}</span>
        </h3> 
        <button 
          class="btn qtd" 
          @click="qtdItens++"
        >
          +
        </button>
        <button 
          class="btn qtd" 
          @click="qtdItens--" 
          v-show="qtdItens>0"
        >
          -
        </button>
      </div>
        <div 
          class="buttons"
        >
          <button 
            class="btn" 
            @click="adicionarCarrinho"
          >
            Adicionar ao carrinho
          </button>
          <router-link 
            class="btn back" 
            to="/" 
            style="background-color: rgb(119, 187, 214)"
          > 
            Voltar
          </router-link>
        </div>
    </div>
    <Loading v-else/>
  </section>
</template>

<script>
import { api } from "@/api.js";

export default {
  name: "Produtos",
  data() {
    return {
      produto: null,
      finalizar: true,
      qtdItens: 0
    };
  },
  props: ["id"],
  methods: {
    getProduto() {
      api.get(`https://fakestoreapi.com/products/${this.id}`).then(response => {
        this.produto = response.data;
      });
    },
    adicionarCarrinho(){
      if(this.qtdItens > 0){
        while(this.qtdItens > 0){
          this.$store.commit('ADICIONAR_CARRINHO', this.produto)
          this.$store.commit('TOTAL_PRODUTOS', this.produto.price)
          this.$store.commit('QTD_CARRINHO_ADICIONAR')
          this.$router.push('/')
          this.qtdItens--
        }
      }else{
        alert("Selecione a quantidade")
      }
    }
  },
  created() {
    this.getProduto()
  }
};
</script>

<style scoped>
  .produto {
    padding: 30px 20px;
    margin: auto;
    width: 50%;
  }
  .fotos{
    width: 50%;
    margin: auto;
  }
  .preco {
    color: rgb(0, 238, 226);
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
  .descricao {
    font-size: 1.2rem;
  }
  .buttons{
    display: flex;
  }
  .btn {
    margin-top: 60px;
    margin-left: 10px;
    width: 200px;
    background:  rgb(214, 157, 119);
  }
  .qtd{
    margin-top: 2%;
    margin-left: 5%;
    width: 10%;
    height: 10%;
    background: rgb(123, 194, 179);
    color: black;
  }
  .qtdItens{
    display: flex;
  }
  .qtdItens span{
    margin-left: 50px;
    color: rgb(106, 157, 223);
    font-size: 30px;
  }

  @media screen and (max-width: 600px){
    .produto {
      padding: 30px 20px;
      margin: auto;
      width: 100%;
    }
    
    .titulo{
      font-size: 15px;
    }
    .qtdItens{
      display:block
    }
    .qtdItens span{
      color: rgb(106, 157, 223);
      font-size: 18px;
      width: 100%;
    }
    .qtd{
      background: rgb(123, 194, 179);
      color: black;
    }
  }
</style>
