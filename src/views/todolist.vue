<template>
  <div class="main">
      <div class="todolistBox">
        <h3>我的近期任务清单</h3>
       <div class="header-box">
         <div class="header-left">
         <div>+</div>
         <h2>todolist</h2>
         </div>
         <div class="header-right">
          <button class="headerAllSelect" @click="handleAllSelect">全选</button>
          <button class="headerAdd" @click="handleAdd">添加</button>
         </div>
       </div>  
       <div class="content">
         <div class="content-item"
               v-for="(item ,index) in todolist" :key="item.id"
         >

           <!-- 选中 checkbook -->
           <div class="content-left" @click="handleSelect(index,item.id)">
            <span
             :style="item.isCheck ?'opacity :1':'opacity:0'"
            ></span>
           </div>
           <!-- input 输入框 -->
           <input
              type="text" 
              class="content-input" 
              v-model="item.text"
              :disabled="item.isCheck"  
              :class="item.isCheck ?'line-through':' ' "
              @blur="handleBlur"
              @keyup="handleBlur"
              ref="inputBox"
              >
           <div class="content-right">
             <p>{{item.time }} </p>
             <button @click="handleDelItem(index,item.id)">删除</button>
           </div>
         </div>
       </div>
      </div>
    </div>
 </template>
 
 <script>
 // import dayjs from "dayjs"
 export default{
    name:'todolist',
    // components:[{todolist}],
   data(){
     return{
       todolist:[],
     }
   },
   created(){
      if(window.localStorage.getItem('listTodo1') === null){
        window.localStorage.setItem('listTodo1',`
        [
        {
            "id": 1696849444886,
            "isCheck": false,
            "text": "明天有早课哦",
            "time": "2023-10-09 19:04:04"
        },
        {
            "id": 1696832491645,
            "isCheck": true,
            "text": "web前端大作业要15截止哦",
            "time": "2023-10-09 14:21:31"
        },
        {
            "id": 1696832488924,
            "text": "今天下午要输液哦",
            "isCheck": true,
            "time": "2023-10-09 14:21:28"
        },
        {
          "id": 1697035473379,
          "isCheck": false,
          "text": "下星期三要交web实验报告呐  加油！",
          "time": "2023-10-11 22:44:33"
        },
        {
          "id": 1696931741991,
          "isCheck": true,
          "text": "今天上了web实验课哦",
          "time": "2023-10-10 17:55:41"
        }

        ]`);
          }

     let getList = JSON.parse(window.localStorage.getItem("listTodo1"))
     
     if( getList === null){
       this.todolist=[{
         id: this.randomID(),
         text: "请点击上方添加按钮添加事件",
         isCheck:false,
         time:this.formaData(new Date),
         // time:new Date
       },
      ]
     }else{
       this.todolist = getList
     }
   },
   methods:{
     //添加功能
     handleAdd(){
       this.todolist.unshift({
         id:this.randomID(),
         isCheck:false,
         text:"",
         time:this.formaData(new Date),
       })
       const inputLength = this.todolist.length -1
       //获取焦点
       this.$nextTick(()=>{
         this.$refs.inputBox[inputLength].focus()
       })
     },
     //选中功能
     handleSelect(index,id){
         if(this.todolist[index].id ===id){
           this.todolist[index].isCheck = !this.todolist[index].isCheck
           this.storage();
         }
       },
       //全选功能
       handleAllSelect(){
          this.todolist.forEach(item=>{
           // if(item.isCheck) return;
           item.isCheck =! item.isCheck;
           this.storage();
          })
       },
     //删除功能 
     handleDelItem(index,id){
       if(this.todolist[index].id === id){
         this.todolist.splice(index,1)
         this.storage();
       }
     },
    //  判断是否输入完成
     handleBlur(){
      this.storage()
     },
     //生成随机Id 10位数的iD : ,
     randomID(){
       return Number(Math.random().toString().substr(2,0) + Date.now().toString( 10))
     },
     //时间格式化
     // let time = new Date(),
     // 定义格式化封装函数
    formaData(timer) {
       const year = timer.getFullYear()
       const month = timer.getMonth() + 1 // 由于月份从0开始，因此需加1
       const day = timer.getDate()
       const hour = timer.getHours()
       const minute = timer.getMinutes()
       const second = timer.getSeconds()
       return `${this.pad(year, 4)}-${this.pad(month)}-${this.pad(day)} ${this.pad(hour)}:${this.pad(minute)}:${this.pad(second)}`
     },
     pad(timeEl, total = 2, str = '0') {
         return timeEl.toString().padStart(total, str)
     },
     //本地存储功能
   storage(){
       window.localStorage.setItem('listTodo1',JSON.stringify(this.todolist))
     }
   }
 }
 </script>
 
 <style lang="less"  scope>
  .main{
    h3{
      // margin-top:60px ;
      // display:inline-block;
      // float: left;
      // position:absolute;
      // margin-top: 20px;
      text-align: center;
      font-size: 30px;
      color: aliceblue;
      font-family:华文行楷;
    }
  }
 button{
       padding: 5px 10px;
       border: none;  
       border-radius: 4px;  
       color:#fff;  
       margin-left: 10px;
     }
 .todolistBox{
  margin-top:80px ;
   width: 60%;
  /* height: 50%; */
   background: #ceb8bb8e; 
   border-radius: 10px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   padding:20px;
   box-sizing: border-boxf;
   color:#fff;
   /* // margin: 0 auto ; */
   .header-box{
    display: flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:#ccc 1px solid ;
    .header-left{
     display: flex;
     align-items:center;
     div{
       width: 50px;
       height: 50px;
       border-radius: 50%;
       background: #ceb8bb8e;
       font-size: 30px;
       text-align: center;
       margin-right: 15px ;
     }

    }
    .header-right{
     .headerAllSelect{
       background: #c43f38;
    }
    .headerAdd{
       background: #23a423;
 
    }
   }
 }
 .content{
   margin-top: 20px;
   height: 450px;
   overflow-x: hidden;
   overflow-y:auto;
   ::-webkit-scrollbar{
    display: none;
   }
   .content-item{
     display: flex;
     justify-content: space-between;
     align-items:center ;
     background: #3539445e;
     border-radius: 8px;
     padding:10px 20px;
     box-sizing: border-box;
     margin-top: 20px ;
     .content-left{
       width: 30px;
       height: 30px;
       border: 1px solid #ccc;
       border-radius: 50%;
       position: relative;
       span{
         display:inline-block;
         width: 20px;
         height: 20px;
         background-color:#ceb8bb8e;
         border-radius: 50%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%,-50%);
       }
     }
     .line-through{
       color:rgba(255, 255,255,0.5);//文字颜色
       text-decoration:line-through rgba(255, 255,255,0.8)//横线颜色
     }
     .content-input{
       flex:1;
       margin: 0 10px;
       outline: none;
       background: transparent;
       border: none;
       border-bottom: 1px solid #ccc;
       padding:5px 10px;
       color: #ccc;
     }
     .content-right{
       display: flex;
       align-items: center;
       button{
         background: #c43f38;
       }
     }
   }
 }
 } 
//  .foot{
//   background-color: black;
//   width: 100%;
//   height: 30px;
//  }  
 </style>
 