<template>
  <div id="study">
    <h3>我的学校</h3>
    <ul>
      <!-- <li vi-for="(item,index) in urls"><img src="item.url"> </li> -->
      <li><img class="animate__animated animate__shakeX" src="../assets/S1.jpg" ></li>
      <li><img class="animate__animated animate__shakeY" src="../assets/S2.jpg" ></li>
      <li><img class="animate__animated animate__swing" src="../assets/S3.jpg" ></li>
      <li><img class="animate__animated animate__swing" src="../assets/S4.jpg" ></li>
      <li><img class="animate__animated animate__swing" src="../assets/S5.jpg" ></li>
      <li><img class="animate__animated animate__swing" src="../assets/S6.jpg" ></li>
      <li><img class="animate__animated animate__swing" src="../assets/S7.jpg" ></li>
      <li><img class="animate__animated animate__swing" src="../assets/S8.jpg" ></li>
    </ul>
   
  </div> 
</template>

<script >

 export default{
  data(){
    
    return{
     
     
  }
}
 }
</script>

<style lang='less'scope>
  #study{
    width: 100%;
    height: 100%;
    
    h3{
      margin-top: 5%; 
      font-family:华文行楷;
      font-size: 30px;
      margin-left: 30px;
    }
    img{
      width:100%;
    }
  }
 
</style>
