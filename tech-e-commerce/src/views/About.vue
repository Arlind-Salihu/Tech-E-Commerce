<template>
  <div class="about">
    <Navbar></Navbar>
    <div style="padding-left:16px">	
            <link href="../stilicss/rrethnesh.css" rel="stylesheet">
            <div class="about-section">
                <h1>About Us</h1>
                <p>We are the best team ever!</p>
                <p>Contact us for more informations!</p>
			  </div>
			<br>
			<h2 style="text-align:center;"><b>STAFF</b></h2>
		<br>
              <div id="divdefault">
              
              <div class="row">
                <div class="column">
                  <div class="card">
                    <img src="../assets/staff/abc.png" alt="staff" id="staff">
                    <div class="container">
                      <h2>Arlind Salihu</h2>
                      <p><b>Full Stack Developer</b></p>
                      <p>Vendbanimi: Podujevë<br>Mosha: 20<br></p>
                      <p>E-mail: as47047@ubt-uni.net</p>
                      <p><a href="https://www.facebook.com/arlindsalihu5"><button class="button">Contact</button></a></p>
                    </div>
                  </div>
                </div>
              
                <div class="column">
                  <div class="card">
                    <img src="../assets/staff/yllka.png" alt="staff" id="staff">
                    <div class="container">
                      <h2>Yllka Uka</h2>
                      <p class="title"><b>Graphic Designer</b></p>
                      <p>Vendbanimi: Prishtinë<br>Mosha: 20<br></p>
                      <p>E-mail: yu47769@ubt-uni.net</p>
                      <p><a href="https://www.facebook.com/yllkaauka"><button class="button">Contact</button></a></p>
                    </div>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <img src="../assets/staff/burimi.png" alt="staff" id="staff">
                    <div class="container">
                      <h2>Burim Aliu</h2>
                      <p class="title"><b>Front-End Developer</b></p>
                      <p>Vendbanimi: Bujanoc<br>Mosha: 21<br></p>
                      <p>E-mail: ba48372@ubt-uni.net</p>
                      <p><a href="https://www.facebook.com/profile.php?id=100005480044352"><button class="button">Contact</button></a></p>
                    </div>
                  </div>
                </div>
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

export default {
  name: "home",
  components: {
    Login
  }
};
</script>
<style>
.about{
  background: #f2f2f2;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px;
    background-size: cover;
    justify-content: center; 
    align-items: center;
  }

  #staff{
    width:300px;
  }
  
  html {
    box-sizing: border-box;
  }
  #divdefault{
    display: flex;
    justify-content: center;
  }
  
  .column {
    display: flex;
    flex-direction: row;
    justify-content: center;  
    float: left;
    margin-right: 100px;
    margin-bottom: 16px;
  }
  
  .card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
    display: flex;
    justify-content: center;
  }
  
  .about-section {
    padding: 50px;
    margin-left: -20px;
    justify-content: center; 
    text-align: center;
    background-color: #474e5d;
    color: white;
    justify-content: center;
  }
  
  .container {
    padding: 0 16px;
    justify-content: center;
    align-items: center;
  }
  
  .container::after, .row::after {
    content: "";
    clear: both;
    display: flex;
    justify-content: center; 
    align-items: center;
  }
  
  .button {
    justify-content: center; 
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }
  
  .button:hover {
    justify-content: center; 
    background-color: #555;
  }

  @media only screen 
  and (device-width : 375px) 
  and (device-height : 812px) 
  and (-webkit-device-pixel-ratio : 3) { 

.topnav a{
  width: 50%;
  height: 20%;
}
    
  }
</style>