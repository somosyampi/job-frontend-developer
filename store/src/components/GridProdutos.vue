<template>
  <section 
    class="container"
  >
    <div 
      v-if="produtosCategoria" 
      class="produtos"
    >
      <div 
        class="produto" 
        v-for="(produto, index) in produtosCategoria" 
        :key="index"
      >
        <router-link 
          :to="{name: 'produto', params: {id: produto.id}}"
        >
          <img 
            v-if="produto.image" 
            :src="produto.image" 
            :alt="produto.image"
          >
          <p 
            class="preco"
          >
            {{produto.price | numeroPreco}}
          </p>
          <h2 
            class="titulo">
              {{produto.title}}
            </h2>
          <p>
            {{produto.description}}
          </p>
        </router-link>
      </div>
    </div>
    
    <div 
      v-else 
      key="resposta"
    >
      <p 
        class="resposta"
      >
        Sem resultados..
      </p>
    </div>
    <Loading :exibir="carregando" />
  </section>
</template>

<script>
import { api } from "@/api.js";

export default {
  name: "GridProdutos",
  components: {
  },
  data() {
    return {
      
      carregando: false,
    };
  },
  computed: {
    produtosCategoria(){
      return this.$store.state.produtos
    }
  },
  methods: {
    getProdutos() {
      let categoria;

      this.carregando = true;

      if(this.$store.state.categoria) {
        categoria = new URL(`https://fakestoreapi.com/products/category/${this.$store.state.categoria}`)
      }
      else {
        categoria = new URL(`https://fakestoreapi.com/products`)
      }
      api.get(`${categoria.href}`)
        .then(response => {
           this.$store.commit('ATUALIZAR_PRODUTOS',  response.data);
           this.carregarGrid()
        })
        .finally(() => {
          this.carregando = false;
        });
    },
    carregarGrid(){
      this.getProdutos();
    }
  },
  created() {
    this.carregarGrid();
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
  margin: 5px;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: rgb(77, 207, 224);
  font-weight: bold;
}

.resposta {
  font-size: 25px;
  margin-top: 2%;
  text-align: center;
}

img{
  width: 250px;
  height: 300px;
}

</style>
