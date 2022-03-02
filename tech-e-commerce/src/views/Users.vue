<template>
  <div class="users">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Users Page</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, reiciendis iste?</p>
              </div>
              <div class="col-md-6">
                <img src="../assets/product.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
        <hr>
        <div class="user-test">

              <h3 class="d-inline-block float-left">Users List</h3>
              
            <button @click="addNew" class="btn btn-primary float-right">Add User</button>
                  <div class="table-responsive">
                    <table class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                  <tbody>
                    <tr v-for="profile in profiles" v-bind:key="profile">
                      <td>
                        {{profile.name}}
                      </td>

                      <td>
                        {{profile.email}}
                      </td>

                      <td>
                        <button class="btn btn-primary" @click="editProfile(profile)">Edit</button>
                        <button class="btn btn-danger" @click="deleteProfile(profile)">Delete</button>
                      </td>
                      
                    </tr>
                  </tbody>
                  </table>
                  </div>
              </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editLabel">Edit Profile</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                    <div class="row">

                    <div class="col-md-8">
                        <div class="form-group">
                          <input type="text" placeholder="Profile Name" v-model="profile.name" class="form-control">
                        </div>

                        <div class="form-group">
                          <input type="text" placeholder="Profile Email" v-model="profile.email" class="form-control">
                        </div>
                    </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="addProfile()" type="button" class="btn btn-primary" v-if="modal == 'new'">Add User</button>
                    <button @click="updateProfile()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import {VueEditor} from 'vue2-editor';
import {fb, db} from '../firebase';

export default {
  name: "users",
  components:{
    VueEditor
  },
  props: {
    msg: String,
  },
  data(){
    return{
      profiles:[],
      profile:{
      name: null,
      email: null
      }
    }
  },
  firestore(){
    return{
      profiles: db.collection('profiles')
    }
  },
  methods:{
    reset(){
      this.profile = {
      name: null,
      description: null,
      price: null,
      tags: [],
      images: []
      }
    },

    addNew(){
      this.modal = 'new';
      this.reset();
      $('#profile').modal('show')
    },

    updateProfile(){
    this.$firestore.profiles.doc(this.profile.id).update(this.profile);

    Toast.fire({
      icon: 'success',
      title: 'Updated successfully!'
    })
    $('#profile').modal('hide')
  },

    editProfile(profile){
      this.modal = 'edit';
      this.profile = profile;
      $('#profile').modal('show');
    },

    deleteProfile(doc){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          this.$firestore.profiles.doc(doc.id).delete()

          Toast.fire({
            icon: 'success',
            title: 'Deleted successfully!'
          })
        }
      })
    },

    readData(){

    },

    addProfile(){
      this.$firestore.profiles.add(this.profile);

      Toast.fire({
      icon: 'success',
      title: 'Created successfully!'
    })

      $('#profile').modal('hide')
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