<template>
  <div class="business">
    <Header :currentN="partValue"></Header>
    <div class="business-banner">
      <div class="busban-text left-text">全行业软件开发</div>
      <div class="busban-text right-text">专业、高效、安全</div>
    </div>
    <div class="business-main">
      <ul class="business-box">
      	<li class="business-item"  v-for="(item,index) in businessList" :key="index">
          <div class="busi-img"><img :src="item.url" alt=""></div>
          <div class="busi-right">
            <div class="busi-title">{{item.title}}</div>
            <div class="busi-lead">{{item.detail}}.</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .business-banner{
    width: 100%;
    height: 4.2em;
    background-image: url("../../static/images/business_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
  }
  .busban-text{
    font-size: 0.48em;
    line-height: 1.5em;
    color: #fff;
    text-shadow: 0px 3px 5px rgba(51, 51, 51, 0.5);
  }
  .business-box{
    margin:0.53em 3.6em 0 3.6em;
  }
  .business-item{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.9em;
  }
  .business-item:last-child{
    margin-bottom: 0.53em;
  }
 .business-item:nth-child(2n){
    flex-direction: row-reverse;
  }
  .busi-img{
    width: 2em;
    height: 2em;
  }
  .busi-img img{
    width: 100%;
    height: 100%;
  }
  .business-item:hover img{
    animation: mymove 5s linear;
  }
  /* Chrome, Safari, Opera */
  @-webkit-keyframes mymove {
    50% {-webkit-transform: rotate(360deg);}
  }
  @keyframes mymove {
    50% {transform: rotate(360deg);}
  }
  .busi-right{
    width: 7.7em;
    height: 1.56em;
    padding:0.44em 0.65em 0 0.65em;
    box-shadow: 0px 0px 0.5em 0px rgba(214, 214, 214, 0.59);
    border-radius: 0px 0.6em 0px 0.6em;
    text-align: left;
  }
  .busi-title{
    font-size: 0.36em;
    line-height: 1em;
    margin-bottom: 0.5em;
  }
  .busi-lead{
    font-size: 0.24em;
    line-height: 1.25em;
    color: #999;
    width: 32.1em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .business-item:nth-child(1) .busi-title{
    color: #ef6e50;
  }
  .business-item:nth-child(2) .busi-title{
    color: #497bed;
  }
  .business-item:nth-child(3) .busi-title{
    color: #29d683;
  }
  .business-item:nth-child(4) .busi-title{
    color: #eeba3e;
  }
</style>
<script type='ecmascript-6'>
	// import axios from 'axios'
	//import Header from './../Header';
  import Header from './header.vue';

	export default {
    props:{
    },
    data () {
      return {
        partValue:1,
        businessList:[]
      };
    },
    created(){

    },
    mounted (){
      var _this=this;
      _this.$get('/official-website/business/getBusinessDetail',{}).then(data=>{
        var seller=JSON.stringify(data);
        //console.log('结果111:'+seller);
        _this.businessList = data;
        _this.$nextTick(()=>{
          _this.$ami('.left-text',0,'left','10%',0.5,true);
          _this.$ami('.right-text',0,'right','10%',0.5,true);
          _this.$ami('.busi-img',0,'center','0%',0.5,true);
          _this.$ami('.business-item:nth-child(n) .busi-right',0,'right','10%',1,true);
          _this.$ami('.business-item:nth-child(2n) .busi-right',0,'left','10%',1,true);
        });
      });
    },
    components: {
      Header
    },
    computed: {

    },
    methods: {

    },
    watch: {}
	}
</script>
