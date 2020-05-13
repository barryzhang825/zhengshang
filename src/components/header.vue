<template>
   <div class="header">
     <div class="header-content">
       <div class="header-logo" @click="goHome"><img src="../../static/images/logo.png" alt="公司logo"></div>
       <div class="header-nav">
         <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex">
           <el-menu-item v-for="(item,index) in navList" :key="index" @click="reLoad"><router-link :class="{active:currentN==index}" class="nav-text" tag="div" :to="{name:item.url}">{{item.text}}</router-link></el-menu-item>
         </el-menu>
       </div>
	   <div class="phone"><img src="../../static/images/phone.png" alt=""><span>0371-55150821</span></div>
     </div>
   </div>
</template>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding:0.33em 0 0.23em 0;
    background-color: #fff;
    z-index: 1000;
  }
  .header-nav{
    margin-top: 0.1em;
  }
  .header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 2em;
  }
  .header-content .el-menu.el-menu--horizontal {
     border-bottom: none;
  }
  .header-logo{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
  }
  .header-logo img{
    width: 2.23em;
    height: 0.68em;
  }
  .nav-text.active:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 0px;
    border: 2px solid #185EE0;
    border-radius: 2px;
    left: 0;
    bottom: 0;
  }
 .el-menu--horizontal>.el-menu-item{
    font-size: 0.18em;
    line-height: 1em;
    padding:0 5.55555em 0 0;
    height: auto;
  }
  .el-menu-item:last-child{
    padding:0;
  }
  .nav-text{
    color: #333333 !important;
    display: block;
    padding:0 0 1em 0;
  }
  .nav-text.active{
    color: #185ee0 !important;
    position: relative;
  }
  .phone{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .phone img{
    width: 0.3em;
    height: 0.3em;
    margin-right: 0.1em;
  }
  .phone span{
    font-size: 0.2em;
  }
</style>

<script type='ecmascript-6'>
	export default {
    props:{
      currentN:{
        type:Number
      }
    },
    data () {
      return {
        activeIndex: '1',
        navList:[
          {
            id:1,
            text:"首页",
            url:"Home"
          },
          {
            id:2,
            text:"业务领域",
            url:"BusinessArea"
          },
          {
            id:3,
            text:"客户案例",
            url:"CustomerCase"
            //url:"CustomerCaseDetail"
          },
          {
            id:4,
            text:"新闻中心",
            url:"NewsCenter"
            //url:"NewsCenterDetail"
          },
          {
            id:5,
            text:"关于我们",
            url:"AboutUs"
          },
          {
            id:6,
            text:"联系我们",
            url:"ContactUs"
          }
        ]
      };
    },
    created(){

    },
    mounted (){

    },
    components: {

    },
    computed: {

    },
    methods: {
      goHome(){
        this.$router.push('/home');
      },
      reLoad(){
        location.reload();
      }
    },
    watch: {}
	}
</script>
