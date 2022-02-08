<template>
  <section 
    class="container"
  >
    <Loading :exibir="carregando" />
    <h1 
      v-show="!carregando"
    >
      {{this.$store.state.titulo}}
    </h1>
    <div
      v-show="!carregando"
      v-if="produtosCategoria" 
      class="itens"
    >

      <div 
        class="item" 
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
  h1 {
    color: rgb(119, 183, 255);
    font-size: 2rem;
    text-align: center;
  }
  .container {
    max-width: 80%;
    margin: 0 auto;
  }

  .itens {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin: 30px;
  }

  .item {
    box-shadow: 0 4px 8px rgba(22, 118, 214, 0.1);
    padding: 20px;
    background: rgba(255, 255, 255, 0.816);
    margin: 5px;
  }

  .item:hover {
    box-shadow: 0 6px 12px rgba(81, 108, 134, 0.561);
    position: relative;
  }

  .item img {
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

@media screen and (max-width: 600px) {
  .container {
    max-width: 100%;
  }
  .itens {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
  .item {
    align-items: center;
    box-shadow: 0 4px 8px rgba(22, 118, 214, 0.1);
    padding: 20px;
    background: rgba(255, 255, 255, 0.816);
    width: 85%;
  }
  .titulo {
    margin-bottom: 10px;
    font-size: 18px;
  }
  img{
    width: 100px;
    height: 150px;
  }
}

  /* @media (max-width: 600px){
    h1 {
      color: rgb(119, 183, 255);
      font-size: 2rem;
      text-align: center;
    }
    .container {
      margin: 10% auto;
    }

    .produtos {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0.1%;
    }

    .produto {
      box-shadow: 0 4px 8px rgba(22, 118, 214, 0.1);
      background: rgba(255, 255, 255, 0.816);
      border-radius: 4px;
      transition: all 0.2s;
      width: 250px;
      align-items: center;
    }

    .produto:hover {
      box-shadow: 0 6px 12px rgba(81, 108, 134, 0.561);
      transform: scale(1.0);
      position: relative;
      z-index: 1;
    }

    .produto img {
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .titulo {
      
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .preco {
      color: rgb(77, 207, 224);
      font-weight: bold;
      margin: 10px 0 10px 0;
    }

    .resposta {
      font-size: 25px;
      margin-top: 2%;
      text-align: center;
    }

    img{
      margin: auto;
      width: 100px;
      height: 150px;
    } */
  /* } */

</style>
