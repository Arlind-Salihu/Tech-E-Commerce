<template>
  <div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                    <h3>Orders Page</h3>
                    
                 <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="../assets/orders.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>

          <hr>


      </div>

                  <div class="col-md-8" style="margin-left: 200px;">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="item in this.$store.state.cart" v-bind:key="item" class="media">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}

                            </h5>
                            <p class="mt-0">{{item.productPrice | currency}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>

                    </ul>
                </div>


    
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "Products",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },

  data(){
    return {
        products: [],
        product: {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
        },
        activeItem:null,
        modal: null,
        tag: null
    }
  },

  firestore(){
      return {
        products: db.collection('products'),
      }
  },
  methods:{

    deleteImage(img,index){

      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index,1);

      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });

    },

    addTag(){
       this.product.tags.push(this.tag);
       this.tag = "";
    },
    uploadImage(e){

      if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = fb.storage().ref('products/'+ Math.random() + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });

          });

      }


    },

    reset(){
      this.product = {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
      }
    },

    addNew(){
        this.modal = 'new';
        this.reset();
        $('#product').modal('show');
    },
    updateProduct(){
        this.$firestore.products.doc(this.product.id).update(this.product);
          Toast.fire({
            type: 'success',
            title: 'Updated  successfully'
          })

           $('#product').modal('hide');
    },

    editProduct(product){
      this.modal = 'edit';
      this.product = product;
      $('#product').modal('show');
    },


    deleteProduct(doc){


      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

          this.$firestore.products.doc(doc['.key']).delete()

          Toast.fire({
            type: 'success',
            title: 'Deleted  successfully'
          })

        
        }
      })


        
    },
    readData(){

      
     
    },
    addProduct(){
      
      this.$firestore.products.add(this.product);
      
          Toast.fire({
            type: 'success',
            title: 'Product created successfully'
          })

      $('#product').modal('hide');
    }

  
  },
  created(){
  

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

</style>