<template>
  <section 
    class="container"
  >
    <Loading :exibir="carregando" />
    <div
      v-show="!carregando"
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
  </section>
</template>

<script>
  export default {
    name: "GridProdutos",
    components: {
    },
    data() {
      return {
         
      };
    },
    computed: {
      produtosCategoria(){
        return this.$store.state.produtos
      },
      carregando(){
        return this.$store.state.carregando
      }
    }

  }
</script>

<style scoped>
  .container {
    max-width: 80%;
    margin: 0 auto;
  }

  .produtos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin: 30px;
  }

  .produto {
    box-shadow: 0 4px 8px rgba(22, 118, 214, 0.1);
    padding: 20px;
    background: rgba(255, 255, 255, 0.816);
    border-radius: 4px;
    transition: all 0.2s;
    margin: 5px;
  }

  .produto:hover {
    box-shadow: 0 6px 12px rgba(81, 108, 134, 0.561);
    transform: scale(1.0);
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
