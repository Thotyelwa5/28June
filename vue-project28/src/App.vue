<template>
  <nav>
    <link rel="shortcut icon" href="https://i.postimg.cc/5NpM66dg/Untitled-design-1.png" type="image/x-icon">
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Products</router-link> |
    <router-link to="/checkout">Checkout</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
  <router-view/>
  <FooterComp/>
</template>
<script>
import FooterComp from '@/components/FooterComp.vue'
  export default {
    components:{
      FooterComp
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
