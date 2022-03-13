<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: lightblue;">
        <a href="/"><img src="../assets/tech-logo.png" alt="Tech" height="50px" width="50px"></a>
  <a class="navbar-brand" href="/" style="margin-left:10px;">Tech E-Commerce</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item"> 
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item"> 
        <router-link to="/products" class="nav-link">Our Products</router-link>
      </li>
      <li class="nav-item"> 
        <router-link to="/productDetails" class="nav-link">Product Details</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/checkout" class="nav-link">Checkout</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/feedback" class="nav-link">Feedback</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login" style="color:white">Login</a>
      <a class="btn btn-outline-success my-2 my-sm-0" @click="logout()">
                                <i class="fa fa-power-off" style="color:white;"></i>
                                <span style="color:white;"> Logout</span>
                            </a>
            <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-cart-plus" style="color:white"></i>
            </a>
    </form>
  </div>

</nav>
  </div>
</template>

<script>
import Login from './Login.vue';
import {fb} from '../firebase';
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components:{Login},
  methods:{
    logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
          });
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media (min-width: 992px) { 
    
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: #fff !important;
    }
   }
</style>
