<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/telefonat/iPhone 13 Pro Max Sierra Blue.png" class="card-img-top" alt="..." width="30%" height="30%">
                        <div class="card-body">
                            <h5 class="card-title">iPhone 13 Pro Max Sierra Blue</h5>
                            <p class="card-text">
                                iPhone 13 Pro Max 512GB, Sierra Blue
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/telefonat/iPhone X Black.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">iPhone X Black</h5>
                            <p class="card-text">
                               iPhone X 64GB, ngjyra: E zeze
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/telefonat/iPhone 11 Red.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">iPhone 11 Red</h5>
                            <p class="card-text">
                                    iPhone 11 128GB, ngjyra: E kuqe

                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>