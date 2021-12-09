<template>
  <header>
    <nav>
      <router-link 
        to="/" 
        class="logo"
      >
        <img 
          src="@/assets/shopping-cart-svgrepo-com.svg" 
          alt="Logo"
        >
      </router-link>
          <select 
            v-model="selected" 
            @click="filtrarCategoria"
          >
            <option 
              value="" 
              disabled
            >
              Categorias
            </option>
            <option 
              value="" 
            >
              Todos
            </option>
            <option 
              value="men's clothing"
            >
              Roupas Masculinas
            </option>
            <option 
              value="women's clothing"
            >
              Roupas femininas
            </option>
            <option 
              value="jewelery"
            >
              Joias
            </option>
            <option 
              value="electronics"
            >
              Eletronicos
            </option>
        </select>
      <form>
        <input 
          id="busca" 
          name="busca" 
          type="text"  
          placeholder="Pesquisar.." 
          v-model="busca"
        >
        <input 
          id="search" 
          type="submit"  
          value="pesquisar" 
          @click.prevent="pesquisarProdutos"
        >
      </form>
      
      <div 
        class="carrinhoItens"
      >
        <router-link 
          to="/carrinho" 
          class="carrinhoIcon"
        >
          <img 
            src="../assets/clipart129459.png" 
            alt=""
          >
        </router-link>
          <span 
            
          > 
            | {{qtdCarrinho}}
          </span>
      </div>
    </nav>
  </header>
</template>

<script>
import { api } from "@/api.js"

  export default {
    name: "NavBar",
    data(){
      return{
        busca: [],
        selected: ''
      }
    },
    watch: {
      selected(val) {
        this.getProdutos(val);
      }
    },
    computed: {
      nome() {
        return this.$store.state.usuario.nome.replace(/ .*/, "");
      },
      qtdCarrinho() {
        return this.$store.state.qtdCarrinho
      }
    },
    methods: {
      getProdutos(val) {
         this.$store.commit('CARREGANDO',  true)

        let categoria;

        if(val === '') {
          
          categoria = new URL(`https://fakestoreapi.com/products`)
        }
        else {
          categoria = new URL(`https://fakestoreapi.com/products/category/${this.$store.state.categoria}`)
          
        }
        
       

        api.get(`${categoria.href}`)
          .then(response => {
            this.$store.commit('ATUALIZAR_PRODUTOS',  response.data)
            // this.carregarGrid()//qual o motivo desta linha
          })
          .finally(() => {
               this.$store.commit('CARREGANDO',  false)

          });
      },

      pesquisarProdutos() {
        let resposta = this.$store.state.produtos.filter((e)=>{
          if (e.title.search(this.busca) === -1) {
              return false;
          } else {
            return true;
          }
        })
        this.$store.commit('ATUALIZAR_PRODUTOS', resposta);
      },

      filtrarCategoria(){
        this.$store.dispatch('filtrarProdutos', this.selected);
      },

    },

    created() {
      this.getProdutos('');
    }
  };
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 50px;
    box-shadow: 0 2px 2px rgba(30, 60, 90, 0.1);
    background: rgb(245, 250, 253);
  }

  .carrinhoItens{
    width: 10%;
    display: flex;
    align-items: center;
  }
  .logo {
    padding: 5px 0;
  }

  .logo img {
    width: 60px;
  }
  form {
    margin-top: 10px;
    width: 30%;
    position: relative;
  }

  #busca {
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 15px;
  }

  #search {
    width: 62px;
    height: 59px;
    background: url("../assets/search.svg") no-repeat center center rgba(119, 189, 255, 0.493);
    text-indent: -150px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    box-shadow: none;
  }
  .carrinhoIcon {
    padding: 10px 0;
    margin-right: 15px;
  }

  .carrinhoIcon img {
    width: 45px;
  }
  span{
    font-size: 25px;
  }
  @media screen and (max-width:600px) {
    nav {
      display: flex;
      justify-content: space-between;
      padding: 5px 50px;
      box-shadow: 0 2px 2px rgba(30, 60, 90, 0.1);
      background: rgb(245, 250, 253);
    }
    .logo {
      width: 20%;
      margin-left: -40px;
    }

    .logo img {
      width: 40px;
    }
    form {
      margin-top: 10px;
      width: 60%;
      position: relative;
    }

    #busca {
      width: 100%;
      height: 40px;
      padding: 15px;
      border: none;
      border-radius: 15px;
      margin-bottom: 5%;
    }

    #search {
      width: 48px;
      height: 42px;
      background: url("../assets/search.svg") no-repeat center center rgba(119, 189, 255, 0.829);
      border: none;
      border-radius: 15px;
      cursor: pointer;
      position: absolute;
    }

    .carrinhoItens{
      width: 20%;
      margin-right: -40px;
    }
    .carrinhoIcon {
      padding: 10px 0;
      
    }

    .carrinhoIcon img {
      width: 40px;
    }
    span{
      font-size: 15px;
    }
  }
</style>
