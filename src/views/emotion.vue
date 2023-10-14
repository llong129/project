<template>
  <div id="life">
    <div class="lbt">
      <el-carousel :interval="3000" type="card" height="400px">
        <el-carousel-item v-for="(item,index) in itemsrc" :key="index">
          <img style="object-fit: scale-down;width: 100%;height: 100%;" class="image" :src="item.idView" :title="item.T">
        </el-carousel-item>
      </el-carousel>
      <div class="foot">
        vhasgf
      </div>
    </div>
  </div> 
</template>

<script >

 export default{
  data(){
    return{

    }
  },
 }
</script>

<style lang='less'scope>

</style>
