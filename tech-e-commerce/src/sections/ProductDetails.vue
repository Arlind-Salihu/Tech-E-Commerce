<template>
  <div class="product-test">
    <Navbar></Navbar>
    <h3 class="d-inline-block float-left">Product Details</h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 250px">Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" v-bind:key="product">
            <td>
              <carousel>
                <slide
                  v-for="(image, index) in product.images"
                  v-bind:key="(image, index)"
                >
                  <img
                    :src="image"
                    class="card-img-top"
                    alt="..."
                    width="150px"
                  />
                </slide>
              </carousel>
            </td>
            <td>
              {{ product.name }}
            </td>

            <td>
              {{ product.price }}€
            </td>

            <td>
              <button class="btn btn-primary" @click="editProduct(product)">
                Show Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.name"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="form-group">
                  <vue-editor
                    v-model="product.description"
                    :disabled="!complete"
                  ></vue-editor>
                </div>
              </div>

              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Price"
                    v-model="product.price"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    @keyup.188="addTag"
                    placeholder="Product tags"
                    v-model="tag"
                    class="form-control"
                    readonly
                  />

                  <div class="d-flex">
                    <p v-for="tag in product.tags" v-bind:key="tag">
                      <span class="p-1">{{ tag }}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group d-flex">
                  <div
                    class="p-1"
                    v-for="(image, index) in product.images"
                    v-bind:key="(image, index)"
                  >
                    <div class="img-wrapp">
                      <img :src="image" alt="" width="120px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";

export default {
  name: "Products",
  components: {
    VueEditor,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      },
      activeItem: null,
      modal: null,
      tag: null,
      complete: false,
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {

    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);

      Toast.fire({
        icon: "success",
        title: "Updated successfully!",
      });
      $("#product").modal("hide");
    },

    editProduct(product) {
      this.modal = "edit";
      this.product = product;
      $("#product").modal("show");
    },


  },
};
</script>
