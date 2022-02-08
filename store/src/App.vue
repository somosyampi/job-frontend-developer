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
  background:#48CAE4;
  border-radius: 10px;
  color: #03045E;
  text-align: center;
  font-size: 100%;
  box-shadow: 0 3px 6px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  color: #345;
  width: 20%;

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
  background: #48CAE4;
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
  
 background-color: #DCF6FF;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23d1f4fe' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23c6f2fd' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23bcf0fb' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23b3eef8' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23aaedf5' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23a1ebf2' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%2399E9EE' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

#main {
  flex: 1;
}


input,
textarea {
  margin-bottom: 2% ;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  font-size: 16px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

@media screen and (max-width: 600px){
  select{
    display: block;
    padding: 10px 20px;
    background:rgba(119, 189, 255, 0.493);
    border-radius: 10px;
    color: #fff;
    text-align: center;
    font-size: 100%;
    box-shadow: 0 3px 6px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    color: #345;
    width: 10%;
  }
}


</style>
