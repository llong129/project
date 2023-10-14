<template>
  <div class="home">
    <div class="lbt">
      <h5 :style="{ color: 'black' }"><i class="el-icon-school"></i>大学生的现状</h5>
      <el-carousel :interval="2500" type="card" height="400px">
        <el-carousel-item v-for="(item, index) in itemsrc" :key="index">
          <img
            style="object-fit: scale-down; width: 100%; height: 100%"
            class="image"
            :src="item.idView"
            :title="item.T"
          />
        </el-carousel-item>
      </el-carousel>
      <div id="introduce">
        <h4>你上大学是否也是这样的呐？</h4>
        <img src="../assets/cy.png" />
        <div class="wzi">
          <router-link
            to="https://baijiahao.baidu.com/s?id=1746656376812343671#:~:text=%E2%80%9C%E5%AE%BF%E8%88%8D%E7%AD%89%E4%BA%8E%E4%BA%BA%E9%97%B4%E9%BB%91,%E4%BE%83%EF%BC%8C%E4%BB%BF%E4%BD%9B%E8%A2%AB%E5%81%B7%E7%AA%A5%E3%80%82"
            >你的大学摆烂了吗？</router-link
          >
          <h2 style="font-size: 30px; color: red">NO!</h2>
          <p>面对纷纷扰扰的大学生活我们应该学会：</p>
          <p>一．<i class="el-icon-wind-power"></i>设立目标</p>
          <p>二．<i class="el-icon-edit"></i>制定计划</p>
          <p>三．<i class="el-icon-check"></i>保持健康</p>
          <p>四．<i class="el-icon-close"></i>排除干扰</p>
          <p>五．<i class="el-icon-position"></i>立即行动</p>
        </div>
      </div>
      <div class="recommend">
        <img src="../assets/study.png" />
        <h2>在大学做好自己每日的任务清单很重要哦！</h2>
        <!-- <p>用一个自己的网站来记录自己的大学生活,我觉得很有意义。</p> -->
        <!-- <p>所以我就想用这个网站来记录我大学发生的意义的事，包括我的近期计划！</p> -->
        <!-- <p>用一个自己的网站来记录自己的大学生活,我觉得很有意义.所以我就想用这个网站来记录我大学发生的意义的事，包括我的将其计划！</p> -->
      </div>
    </div>
    <div class="foot">
      <p>@github.com/llong129 和我一起记录你的大学生活吧</p>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  data() {
    return {
      itemsrc: [
        { id: 0, T: "", idView: require("../assets/h1.jpg") },
        { id: 1, T: "", idView: require("../assets/h01.jpg") },
        { id: 2, T: "", idView: require("../assets/h02.jpg") },
        { id: 3, T: "", idView: require("../assets/h03.jpg") },
        { id: 4, T: "", idView: require("../assets/h04.jpg") },
      ],
      screenwidth: 0,
    };
  },
  methods: {},
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="less" scope>
.home::after {
  content: "";
  display: block;
  clear: both;
}
.home {
  position: relative;
}
.lbt {
  margin-top: 150px;
  position: absolute;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);


  h5 {
    margin-top: -5%;
    position: absolute;
    // margin-bottom:30%;
    font-size: 30px;
    color: aliceblue;
    font-family: 华文行楷;
  }
}
.el-carousel__item img {
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.hnext {
  float: left;
  width: 100%;
  height: 500px;
}
#introduce {
  margin-top: 7%;
  img {
    float: left;
    width: 250px;
    margin-right: 50px;
  }
  h4 {
    margin-top: -3%;
    position: absolute;
    font-size: 30px;
    color: aliceblue;
    font-family: 华文行楷;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.944);
  }
}
.recommend {
  float: left;
  margin-top: 40px;
  // background-color:black;
  width: 100%;
  height: 170px;
  img {
    float: left;
    width: 300px;
    margin-right: 30px;
  }
  h2 {
    margin-top: 60px;
    display: inline-block;
    float: left;
    position: absolute;
    font-size: 30px;
    color: aliceblue;
    font-family: 华文行楷;
  }
}
.foot {
  margin-top: 75%;
  float: left;
  background-color: #ceb8bb8e;
  margin-bottom: 0%;
  width: 100%;
  height: 50px;
  p {
    font-size: 20px;
    color: aliceblue;
    font-family: 华文行楷;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
