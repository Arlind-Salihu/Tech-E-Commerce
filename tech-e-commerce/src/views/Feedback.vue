<template>
  <div class="feedback">
      <Navbar></Navbar>
      <br>
      <br>      

    <div id="forma" class="form-group">
              <h3>Feedback</h3>
    <input type="text" id="inputet" class="form-control" placeholder="E-mail" v-model="feedback.email"/>
    <input type="text" id="inputet" class="form-control" placeholder="Message" v-model="feedback.message" style="height:200px;"/>
    <button @click="addMessage()" type="button" class="btn btn-primary" id="inputet" style="width:200px;">Send Message</button>
    </div>
    <div id="box">
        <img src="../assets/mail.png" alt="mail"/>
    </div>
      
      <login></login>
      <mini-cart></mini-cart>      
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import 'bootstrap';
import {db} from '../firebase';

export default {
  name: "Feedback",
  components: {
      Login
  },
  props: {
    msg: String,
  },
  data(){
    return{
      feedbacks:[],
      feedback:{
      email: null,
      message: null
      },
      activeItem: null
    }
  },
  firestore(){
    return{
      feedbacks: db.collection('feedbacks')
    }
  },
  methods:{
    addMessage(){
      this.$firestore.feedbacks.add(this.feedback);

      Toast.fire({
      icon: 'success',
      title: 'Sent successfully!'
    })
    }
  }
};
</script>

<style>
#forma{
    float: left;
    margin: 30px 0px 0px 50px;
}
#inputet{
    width:500px;
    margin:0 auto;
    margin-top:10px;
    border-radius:20px;
}
#box{
    float: right;
    margin: 50px 150px 0px 0px;
    width:500px;
    height: 300px;
    text-align: center;
    align-items: center;
}
#box img{
    margin-top: -100px;
}
</style>