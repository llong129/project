<template>
  <div id="myuse">
    <div class="lbt">
      <h5><i class="el-icon-document-add"></i>任务管理软件推荐</h5>
      <el-carousel :interval="3000" type="card" height="400px">
        <el-carousel-item v-for="(item,index) in itemsrc" :key="index">
          <img style="object-fit: scale-down;width: 100%;height: 100%;" class="image" :src="item.idView" :title="item.T">
        </el-carousel-item>
      </el-carousel>
      <div class="next">
        <ul>
        <li>
          <img src="../assets/n01.png">
          <span><p style="font-size:45px">Doit.im</p>
          <p>平台:Android/Windows/Web/苹果全平台</p>
          <p>特色:国产,同步速度有保证.界面清新简洁.根据传统GTD时间管理方法设计,功能齐全.快速添加任务十分方便,Web支持任务批量导入.全球超过600万用户.
          </p></span>
        </li>
        <li>
          <img src="../assets/n02.png">
          <span><p style="font-size:45px">Wunderlist</p>
          <p>平台:Android/Windows/Web/苹果全平台</p>
          <p>特色:由德国公司于2011年开发,2015年6月被微软收购.目前没有收费版本,拓展性强,颜值较高,可自行改造成较为符合GTD时间管理流程的形式,没有地点分类功能.任务等级分星标、无星标两种.中文名叫奇妙清单.</p>
          </span>
        </li>
        <li>
          <img src="../assets/n03.png">
          <span>
            <p style="font-size:45px">滴答清单</p>
            <p>平台：Android/Web/iOS</p>
            <p>特色：国产，简单、流畅。主要是为任务提供时间和列表两项属性，偏向于待办事项与备忘录的功能，上手比较容易，可以添加图片等附件，没有地点分类功能。国际版叫TickTick。</p>
          </span>
        </li>
        <li></li>
        <li></li>
      </ul>
      </div>
    </div>
  </div> 
</template>

<script >
import {WOW} from 'wowjs'
 export default{
  data(){
    return{
      itemsrc:[
        {id:0,T:"12313",idView:require("../assets/01.jpg")},
        {id:1,T:"",idView:require("../assets/02.png")},
        {id:2,T:"",idView:require("../assets/03.png")},
        {id:3,T:"",idView:require("../assets/04.jpg")},
        // {id:4,idView:require("../assets/05.png")},
      ],
      screenwidth:0
    }
 },
 mounted(){
    new WOW().init();
  },
 }
</script>

<style lang='less'scope>

#myuse {
  margin-top: 100px;
  margin-left: 50%;
  padding-bottom: 20px;
  transform: translateX(-50%);
}

.lbt{
  // margin-top:700px;
  // position:absolute;
  // width: 80%;
  // top:100% ;
  // left:50%;
  // transform: translate(-50%,-50%);

  h5{
    position:absolute;
    margin-bottom:10%;
    font-size: 30px;
    color:black;
    font-family:华文行楷;
  } 
}
.el-carousel__item img {
    opacity: 0.75;
    line-height:300px;
    margin: 0;
  }
  .next{
    
    li{
      img{
      // position:absolute;
      vertical-align: middle;
      float: left;
      height:200px;
      width: 200px;
      margin-right: 20px;
    }
      display: inline-block;
      vertical-align: bottom;
      margin: 20px 0; 
      // margin-top:500px ;
      // align-items: start;
      // vertical-align:-webkit-baseline-middle;
     span{
        margin-top:45px; 
        display:block;
     }
    }
  }
</style>
