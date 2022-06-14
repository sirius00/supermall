<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="ActiveStyle"><slot name="item-text">我的</slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    ActiveColor:{
      type: String,
      default: 'pink'
    }
  },
  data(){
    return {
      // isActive: true,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    ActiveStyle(){
      return this.isActive ? {color:this.ActiveColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  /*组件之间均等分*/
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/*.active{*/
/*  color: pink;*/
/*}*/
</style>
