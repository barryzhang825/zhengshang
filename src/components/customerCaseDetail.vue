<template>
  <div class="customer">
    <Header :currentN="partValue"></Header>
    <div class="custom-banner">
      <div class="cusban-phone"><img src="../../static/images/customer_phone.png" alt=""></div>
      <div class="cusban-title">
        <div class="cusbant-text">以用户体验为中心</div>
        <div class="cusbant-text">打造有价值的产品</div>
      </div>
    </div>
    <div class="ccd-main">
      <div class="ccdm-left"><img :src="image" alt=""></div>
      <div class="ccdm-right">
        <div class="ccdmr-top">
          <div class="ccdmr-title">{{title}}</div>
          <div class="ccdm-text text">{{type}}</div>
          <div class="ccdm-text desc">{{desc}}</div>
        </div>
        <div class="ccdm-btn" @click="goCase()"><span>返回列表页</span></div>
        <div class="ccdm-like">猜你喜欢</div>
        <ul>
          <li class="ccdm-item" v-for="(item,index) in cusdetailList" :key="index" @click="goCaseDetail(item.caseName,item.groupName)">
            <div class="ccdmi-img"><img :src="item.url" alt=""></div>
            <div class="ccdmi-text">{{item.caseName}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .custom-banner{
    width: 100%;
    height: 4.2em;
    background-image: url("../../static/images/customer_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
  }
  .cusban-phone{
    margin:0.54em 0 0 3.02em;
  }
  .cusban-phone img{
    width: 6.43em;
    height: 3.47em;
  }
  .cusban-title{
    margin:1.4em 3.6em 0em 0;
  }
  .cusbant-text{
    font-size: 0.48em;
    line-height: 1.5em;
    letter-spacing: 3px;
    color: #ffffff;
    text-shadow: 0px 3px 5px rgba(51, 51, 51, 0.5);
    text-align: right;
  }
  .cusbant-text:first-child{
    padding-right: 2.3em;
  }
  .ccd-main{
    margin:0.4em 3.6em 0.1em 3.6em;
    display: flex;
  }
  .ccdm-left{
    margin-right: 0.4em;
    width: 8em;
  }
  .ccdm-left img{
    width: 100%;
  }
  .ccdm-right{
    width: 3.6em;
  }
  .ccdmr-top{
    margin-left: 0.1em;
    text-align: left;
  }
  .ccdmr-title{
    font-size: 0.18em;
    line-height: 1em;
    color: #333;
    margin-bottom: 1.111em;
  }
  .ccdm-text{
    font-size: 0.14em;
    line-height: 1.86em;
    color: #808080;
  }
  .ccdm-text.text{
    margin-bottom: 1em;
  }
  .ccdm-btn{
    width: 3.6em;
    height: 0.5em;
    background-color: #f5ce30;
    border-radius: 0.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin:0.3em 0 0.7em 0;
  }
  .ccdm-btn:hover{
    box-shadow: 0 0.1em 0.2em #999;
  }
  .ccdm-btn span{
    font-size: 0.18em;
    color: #fff;
  }
  .ccdm-like,.ccdmi-text{
    font-size: 0.24em;
    color: #333;
    text-align: center;
  }
  .ccdm-like{
    margin-bottom: 1.67em;
  }
  .ccdm-item{
    margin-bottom: 0.33em;
    cursor: pointer;
  }
  .ccdmi-img{
    width: 2.8em;
    height: 2.8em;
    margin:0 auto 0.3em auto;
    overflow: hidden;
  }
  .ccdmi-img img{
    width: 100%;
  }
</style>
<script type='ecmascript-6'>
	import Header from './header';
  //import CustomerCaseDetail from './customerCaseDetail.vue';

	export default {
    props:{
    },
    data () {
      return {
        partValue:2,
        caseImg:"../../static/images/customer_detail.png",
        cusdetailList:[],
        image:"",
        title:"",
        type:"",
        desc:""
      };
    },
    created(){

    },
    mounted (){
      var _this=this;
      _this.$ami('.cusban-phone img',0,'left','10%',0.5,true);
      _this.$ami('.cusban-title',0,'right','10%',0.5,true);
      var titleStr={
        caseName:_this.$route.query.title,
        caseGroupName:_this.$route.query.caseGroupName
      };
      //console.log(titleStr);
      _this.$get('/official-website/customerCase/customerCasepageDetail',titleStr).then(data=>{
        var seller=JSON.stringify(data);
        //console.log('结果111:'+seller);
        _this.title = data.caseName;
        _this.type=data.groupName;
        _this.desc=data.detail;
        _this.image=data.url;
        _this.cusdetailList=data.guessYouLike;

        _this.$nextTick(()=>{
          _this.$ami('.ccdmr-title',0,'right','30%',0.5,true);
          _this.$ami('.text',300,'right','30%',0.9,true);
          _this.$ami('.desc',600,'right','30%',0.9,true);
          _this.$ami('.ccdm-btn',900,'right','30%',0.9,true);
          _this.$ami('.ccdm-item img',0,'center','0%',0.3,true);
        });

      });
      //location.reload();
    },
    components: {
      Header,
      //CustomerCaseDetail
    },
    computed: {

    },
    methods: {
      goCase(){
        var _this=this;
        _this.$router.push('/customerCase');
      },
      goCaseDetail(ag,name){
        //console.log(name)
        var _this=this;
        _this.$router.push({
          path:'/customerCaseDetail',
          query:{
            title:ag,
            caseGroupName:name,
          },
        });
        location.reload();
      }
    },
    watch: {}
	}
</script>
