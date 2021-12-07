<template>
  <section>
    <h1>{{this.$store.state.titulo}}</h1>
    <GridProdutos/>
  </section>
</template>

<script>
  import GridProdutos from "@/components/GridProdutos.vue";

  export default {
    name: "home", 
    components: {
      GridProdutos
    }
  };
</script>

<style scoped>
  h1 {
    color: rgb(119, 183, 255);
    margin-top: 40px;
    font-size: 2rem;
    text-align: center;
  }
</style>

