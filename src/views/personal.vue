<template>
  <div class="pmain">
    <div class="pls">
      <img src="../assets/tx.png">
      <ul>
        <li style="font-size:40px;margin-left: -45px;font-family: 华文行楷;color: aliceblue; font-weight:bold; margin-top:10px; margin-bottom: 20px;">
        {{name}}</li>
        <li><i class="el-icon-edit"></i>{{ gxqm }}</li>
        <li><i class="el-icon-location-information"></i>IP属性: {{ ip }}</li>
        <br />
        <hr>
        <h3 style="font-size:30px;margin-top: 40px;">关于我</h3>
        <li><i class="el-icon-school"></i>学校:{{school }}</li>
        <li><i class="el-icon-collection-tag"></i>专业：{{ majr }}</li>
        <li><i class="el-icon-date"></i>年份：{{ grade }}</li>
        <hr>
        <div class="pfoot">
          <ul>
            <li><a href="#">最近</a></li>
            <li><a href="#">资源</a></li>
            <li><a href="#">问答</a></li>
            <li><a href="#">帖子</a></li>
          </ul>

          <div :style="{ fontSize: '60px' }">
           
          </div>
        </div>
      </ul>
    </div>
</div>
</template>

<script>
export default{
  // name:'pl',
  data(){
    return{
       name:'做永远18岁的自己!',
       gxqm:'还在完善',
       ip:"四川省",
       age:"20",
       school:"四川轻化工大学",
       majr:"计算机科学与工程专业",
       grade:"2021级",

    }
  },
 
  }
</script>

<style lang="less" scope>
.pmain {
  position: relative;
  // margin-top: 8%;
  width:80%;
  height: 100%;
  background-color: #ceb8bb8e;
  margin-top: 25vh;
  margin-left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.pls{
  width: 100%;
  height:100%;
  top:40%;
  left:50%;
  transform: translate(-50%,-50%);
  position:absolute;

  img {
    margin-top:-70px ;
    width: 250px;
    border-radius: 50%;
  }
  ul {
    font-family:华文行楷;
    margin-left: 50px;
    display: block;
    li{
      padding-top: 20px;
      // display: inline;
      line-height: 20px;
      font-size: 30px;
    font-weight:100 ;
    }
  }
  .pfoot{
    width: 100%;
    height: 100%;
    background-color: #ceb8bb8e;
    ul {

      li {
        display: inline-block;
        margin-top: 20px;
        margin-right:100px ;
        height: 100px;
      }


    }
  }
  
}
</style>
