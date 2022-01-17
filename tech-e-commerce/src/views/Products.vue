<template>
  <div class="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Product Page</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, reiciendis iste?
              Sapiente atque dolor temporibus eius ad in deleniti omnis aspernatur eum tenetur qui animi, 
              repellendus, possimus commodi neque tempore!</p>
              </div>
              <div class="col-md-6">
                <img src="../assets/product.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
        <hr>
      <h3>Basic CRUD</h3>
        <div class="product-test">
          <div class="form-group">
            <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
          </div>
            <div class="form-group">
              <input type="text" placeholder="Price" v-model="product.price" class="form-control">
            </div>
            <div class="form-group">
              <button @click="saveData" class="btn btn-primary">Save Data</button>
            </div>
            <hr>
              <h3>Products List</h3>
                  <div class="table-responsive">
                    <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                  <tbody>
                    <!-- v-bind:key="product" (Kjo pjese osht e shtume per shkak qe v-for po shfaq error)-->
                      <tr v-for="product in products" v-bind:key="product">
                        <td> {{product.data().name}} </td>
                        <td> {{product.data().price}} </td>
                        <td>
                          <button class="btn btn-primary">Edit</button>
                          <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                  </tbody>
                  </table>
                  </div>
              </div>
            </div>
          </div>
</template>

<script>

import {fb, db} from '../firebase';
export default {
  name: "Products",
  props: {
    msg: String,
  },
  data(){
    return{
      products:[],
      product:{
      name: null,
      price: null
      }
    }
  },
  methods:{
    deleteProduct(doc){
      alert(doc);
    },
    readData(){
        db.collection("products").get().then((querySnapshot) => {
        // this.products = querySnapshot
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
    },
    saveData(){
     db.collection("products").add(this.product)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.readData();
  })
    .catch(function(error){
        console.error("Error adding document: ", error);
  });
      },
      reset(){
        //Object.assign(this.$data, this.$options.data.apply(this));
      }
    },
    created(){
      this.readData();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
