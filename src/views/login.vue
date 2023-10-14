<template>
  <div id='login'>
    <from class="box" action = "login.html" method="post">
        <p>Welcome to my university life station!</p>
        <input type = "text" name = "" placeholder="请输入账号" >
        <input type = "password" name = "" placeholder="请输入密码">
        <!-- <input type="submit" value = "登录" @click="tohomepage" > -->
        <button @click="tohomepage">登录</button>
    </from>
  </div>
</template>

<script >
  export default {
    name:'login',
    data(){
      return{

      }
    },
    methods:{
      tohomepage(){
        this.$router.push("/homepage");
      }
    }
  }
</script>

<style scope>
#login{
  width: 100%;
  height: 100%;
  background-color: #ceb8bb8e;
}
        .box {
            width: 694px;
            padding: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius:8%;
            transform: translate(-50% , -50%);
            background-color: #ceb8bb8d;
            text-align: center;
        }

        .box p {
            color:black;
            /* text-transform: uppercase; */
            font-size: 45px;
        }

        /* 选中输入账号密码的框框 */
        .box input[type="text"],
        .box input[type="password"] {
            border: 0;
            /* background:none; */
            display: block;
            margin: 20px auto;
            /* text-align: center; */
            border: 2px solid #eff3f598;
            padding: 18px 10px;
            width: 50%;
           
            outline: none;
            color:black;
            display: block;
            /* border-radius: 0px; */
            /* transition: 0.25s; */
        }

        /* 设置变化后的界面 */
        .box input[type="text"]:focus,
        .box input[type="password"]:focus {
            width: 280px;
            border-color:rgba(0, 0, 0, 0.198);
        }

        .box button {
            border: 0;
            background-color: white;
            display: block;
            margin: 20px auto;
            text-align: center;
            border: 2px solid rgba(73, 72, 72, 0.128);
            padding: 14px 40px;
            outline: none;
            color: #255d6e;
            border-radius: 24px;
            /* transition: 0.25s; */
        }

        .box button:hover { 
            background:#20323643;
        }
</style>
