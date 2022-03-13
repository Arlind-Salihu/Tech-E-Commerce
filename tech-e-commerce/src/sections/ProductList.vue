<template>
  <div class="products" id="products">
    <Navbar></Navbar>
    <div class="container">
      <h1 class="text-center p-5">Our Products</h1>

      <div class="row">
        <div class="col-md-4" v-for="product in products" v-bind:key="product">
          <div class="card product-item">
            <carousel :perPage="1">
              <slide
                v-for="(image, index) in product.images"
                v-bind:key="(image, index)"
              >
                <img
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  width="250px"/>
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-prices">{{ product.price}}.00€</h5>
              </div>
              <add-to-cart
                :image="getImage(product.images)"
                :p-id="product.id"
                :price="product.price"
                :name="product.name"
              >
              </add-to-cart>
            </div>
          </div>.
        </div>
      </div>
    </div>
    <mini-cart></mini-cart>
    <login></login>
    <footer-tech></footer-tech>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import { db } from "../firebase";
export default {
  name: "Products-list",
  props: {
    msg: String,
  },
  components:{
    Login
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    },
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  background: #f2f2f2;
}
</style>
