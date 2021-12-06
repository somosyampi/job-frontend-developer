<template>
  <div id="app">
    <NavBar/>
    <main id="main">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #345;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

select{
  display: block;
  padding: 10px 20px;
  background:rgba(119, 189, 255, 0.493);
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 3px 6px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  color: #345;
  height: 50px;
}

select:hover,
select:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(11, 47, 126, 0.5);
}


select option {
  color: #345;
  border-radius: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background: rgb(171, 201, 230);
}

.btn {
  display: block;
  padding: 10px 20px;
  background: rgb(119, 189, 255);
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 3px 6px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background: rgb(85, 217, 221);
  transform: scale(1.1);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}


input,
textarea {
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 16px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

</style>
