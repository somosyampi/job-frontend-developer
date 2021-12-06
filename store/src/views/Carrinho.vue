<template 
>
  <section >
    <div 
      class="carrinhoContainer"
    >
      <h2>Itens no carrinho</h2>
        <div 
          class="produtosCarrinho"
        >
          <table 
            v-if="this.$store.state.qtdCarrinho>0"
          >
            <tr  
              v-for="(produto, index) in produtos" 
              :key="index"
            >
              <td>
                <img 
                  v-if="produto.image" 
                  :src="produto.image" 
                  :alt="produto.title"
                >
              </td>
              <td 
                width="50%px"
              >
                <p 
                  class="titulo"
                >
                  {{produto.title}}
                </p>
              </td>
              <td>
                <p 
                  class="preco"
                >
                  {{produto.price | numeroPreco}}
                </p>
              </td>
              <td>
                <button 
                  class="btn btn-table delete" 
                  @click.prevent="deletar(index)"
                >
                  Deletar
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <h3>Valor total: <span>{{total}}</span></h3>
        </div>
      <div 
        class="buttons"
      >
        <button 
          class="btn" 
          @click.prevent="finalizarCompra"
        >
          Finalizar Compra
        </button>
        <router-link 
          class="btn back" 
          to="/" 
          style="background-color: rgb(119, 187, 214)"
        > 
          Continuar comprando
        </router-link>
      </div>
    </div>

  </section>

</template>

<script>
  export default {
    name: "FinalizarCompra",
    return: {
      
    },
    components: { 
    },
    props: ["produto"],
    computed: {
      produtos() {
        return this.$store.state.carrinho
      },
      total(){
        return this.$store.state.total
      }
    },
    watch:{
      produtos(){
        window.localStorage.produtos = this.produtos
      }
    },
    methods: {

      finalizarCompra() {
        if(this.$store.state.total){
          alert("Compra finalizada com sucesso!!")
          this.$store.dispatch('limpar');
          this.$router.push('/')
          
        }else{
          alert("Carrinho vazio, adicione itens para finalizar compras")
        }

      },
      deletar(i) {
        this.$store.dispatch('removerItemDoCarrinho', i);
      }
    }
  };
</script>

<style scoped>
  table{
    width: 100%;
    border: solid 1px rgb(207, 207, 207);
    border-radius: 5px;
    padding: 2%;
  }
  .buttons{
    display: flex;
    width: 90%;
    margin: 5% 0px;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .btn {
    background:  rgb(214, 157, 119);
    margin: 1%;
  }
  .back{
    width: 25%;
  }

  .carrinhoContainer {
    max-width: 60%;
    margin: 0 auto;
  }

  img {
    border-radius: 4px;
    margin-bottom: 20px;
    width: 40px;
    height: 60px;
    margin: 10%;
  }

  .titulo {
    margin-bottom: 10px;
  }

  .preco {
    color: rgb(77, 207, 224);
    font-weight: bold;
  }

  .btn-table{
    border: none;
    border-radius: 3px;
    width: 80px;
    height: 35px;
    font-size: 15px;
    margin: 0px 10px;
  }
  .delete{
    text-align: center;
    background-color: rgb(238, 142, 142);
  }
</style>
