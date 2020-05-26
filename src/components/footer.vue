<template>
   <div class="footer">
    <div class="footer-content">
      <div class="map-img"><img src="../../static/images/map.png" alt="公司地址"></div>
      <div class="information">
        <div class="info-text">QQ邮箱 ：574807769@qq.com <br />
          联系电话：15238699705<br />
          办公地址：郑州市郑东新区金水东路绿地新都会6号楼1521/1522<br />
          分部：弘廷科技<br />
          办公地址：郑州市管城区航海东路2号55号楼22层307号<br />
          分部：智亘科技<br />
          办公地址：郑州市郑东新区金水东路绿地新都会6号楼1521
        </div>
        <div class="info-text">COPYRIGHT 2020 河南正尚网络科技有限公司版权所有 ALL RIGHTS RESERVED<br /><span class="go-info" @click="goYuFun">豫ICP备20012527号-1</span></div>
      </div>
    </div>
   </div>
</template>

<style scoped>
  .footer-content{
    display: flex;
    justify-content: flex-start;
    background-color: #333333;
    padding:0.2em 0;
  }
  .map-img{
    margin: 0 2.84em 0 4.18em;
    width: 3.15em;
    height: 2.66em;
  }
  .map-img img{
    width:100%;
    height: 100%;
  }
  .information{
    padding-top: 0.36em;
  }
  .info-text{
    font-size: 0.16em;
    line-height: 1.875em;
    color: #cccccc;
    text-align: left;
  }
  .info-text:first-child{
    margin-bottom: 1.5em;
  }
  .go-info{
    cursor: pointer;
  }
</style>

<script type='ecmascript-6'>

	export default {
    props:{
    },
    data () {
      return {

      };
    },
    created(){

    },
    mounted (){
      /* var _this=this;
      _this.$nextTick(()=>{
        this.$ami('.map-img',0,'right','30%',0.9,true);
        this.$ami('.information',0,'left','30%',0.9,true);
      }); */

    },
    components: {

    },
    computed: {

    },
    methods: {
      goYuFun(){
        //window.location.href='http://www.miit.gov.cn/';  //当前窗口
        window.open('http://www.beian.miit.gov.cn/'); //新窗口
      }
    },
    watch: {}
	}
</script>
