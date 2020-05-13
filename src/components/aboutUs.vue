<template>
  <div class="aboutus">
    <Header :currentN="partValue"></Header>
    <div class="banner">
      <div class="banner-text aba-left">用专业的技术和诚恳的态度</div>
      <div class="banner-text  aba-right">去服务好每一位客户</div>
    </div>
    <div class="about-nav">
      <ul class="aboutn-list">
        <li class="aboutn-item" v-for="(item,index) in aboutNavList" :key="index">
          <div class="abouti-img"><img :src="item.imgUrl" alt="擅长"></div>
          <div class="abouti-text">{{item.text}}</div>
        </li>
      </ul>
    </div>
    <AboutUsDetail></AboutUsDetail>
    <div class="about-management">
      <div class="abma-main">
        <div class="abmam-left">
          <div class="abmaml"><span>一流服务体验</span></div>
          <div class="abmaml"><span>诚信沟通合作</span></div>
        </div>
        <div class="abmam-center"><span>经营理念</span></div>
        <div class="abmam-right">
          <div class="abmamr"><span>专业技术创新</span></div>
          <div class="abmamr"><span>发展紧密合作</span></div>
        </div>
      </div>
    </div>
    <div class="about-company">
      <div class="aboutc-title">公司环境 <img src="../../static/images/about_us_dub.png" alt=""></div>
      <div class="aboutc-text">CORPORATE ENVIRONMENT</div>
      <ul class="aboutc-list">
      	<li class="aboutc-item" v-for="(item,index) in companyList" :key="index"><img :src="item" alt="公司环境图"></li>
      </ul>
    </div>
    <div class="about-imgbox"><img :src="companyDetailImg" alt="关于我们"></div>
  </div>
</template>

<style scoped>
  .banner{
    width: 100%;
    height: 4.2em;
    background-image: url("../../static/images/about_us_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
  }
  .banner-text{
    font-size: 0.48em;
    line-height: 1.5em;
    letter-spacing: 3px;
    color: #ffffff;
    text-shadow: 0px 3px 5px rgba(51, 51, 51, 0.5);
    margin: 0 auto;
  }
  .banner-text:first-child{
    padding-top: 3.125em;
  }
  .about-nav{
    margin:-0.4em 3.6em 0.6em 3.6em;
    display: flex;
    justify-content: flex-start;
  }
  .aboutn-list{
    width: 100%;
    height: 2em;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 0.2em 0px rgba(205, 205, 205, 0.5);
    border-radius: 0.2em;
  }
  .aboutn-item:nth-child(1) img{
    width: 0.72em;
    height: 0.72em;
    margin: 0.4em 0 0.24em 0;
  }
  .aboutn-item:nth-child(2) img{
    width: 0.66em;
    height: 0.66em;
    margin: 0.47em 0 0.2em 0;
  }
  .aboutn-item:nth-child(3) img{
    width: 0.62em;
    height: 0.62em;
    margin: 0.4em 0 0.26em 0;
  }
  .aboutn-item img:hover{
    animation: advantagemove 1s linear;
  }
  /* Chrome, Safari, Opera */
  @-webkit-keyframes advantagemove {
    100% {-webkit-transform: rotateY(360deg);}
  }
  @keyframes advantagemove {
    100% {transform: rotateY(360deg);}
  }
  .abouti-text{
    font-size: 0.3em;
    line-height: 1em;
    color: #333;
  }
  .about-management{
    margin:0.11em 0 0 0;
    width: 100%;
    height: 3.6em;
    background-image: url("../../static/images/about_us_bg1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .abma-main{
    display: flex;
    justify-content: center;
    padding: 0.32em 0 0 0;
  }
  .abmaml,.abmamr{
    width:2.95em;
    height: 1.31em;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .abmaml{
    background-image: url("../../static/images/about_us_left.png");
  }
  .abmamr{
    background-image: url("../../static/images/about_us_right.png");
  }
  .abmaml span,.abmamr span{
    font-size: 0.3em;
    color: #fff;
    position: absolute;
    top: 1.6667em;
    text-shadow:  0px 2px 3px rgba(139, 111, 0, 0.54);
  }
  .abmaml span{
    left: 1.3em;
  }
  .abmamr span{
    right: 1.3em;
  }
  .abmaml:first-child,.abmamr:first-child{
    margin-bottom: 0.34em;
  }
  .abmam-center{
    width: 1.82em;
    height: 1.82em;
    background-image: url("../../static/images/about_us_circle.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0.45em 0.1em 0 0.1em;
  }
  .about-company{
    text-align: left;
    margin:0.9em 3.6em 0em 3.6em;
  }
  .about-imgbox{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin:0.3em auto 0.5em auto;
  }
  .about-imgbox img{
    width: 12em;
  }
  .abmam-center span,.aboutc-title{
    font-size: 0.3em;
    color: #333;
    line-height: 1em;
  }
  .aboutc-title img{
    vertical-align: middle;
  }
  .aboutc-text{
    font-size: 0.36em;
  	color: #cccccc;
    line-height: 1em;
    margin:0.611em 0 1.6111em 0;
  }
  .aboutc-list{
    display: flex;
    justify-content: flex-start;
  }
  .aboutc-item{
    margin-right: 0.56em;
  }
  .aboutc-item img{
    width: 3.6em;
    height: 3.6em;
  }
  .aboutc-item:last-child{
    margin-right: 0;
  }
</style>
<script type='ecmascript-6'>
	import axios from 'axios';
	import scrollReveal from 'scrollreveal';
  import AboutUsDetail from './aboutUsdetail.vue';
  import {scrollRevealFun} from './../common/common.js';
  import Header from './header.vue';
	export default {
    props:{
    },
    data () {
      return {
        partValue:4,
        scrollReveal: scrollReveal(),
        aboutNavList:[
          {
            imgUrl:"./static/images/about_us_item1.png",
            text:"7年项目开发经验"
          },
          {
            imgUrl:"./static/images/about_us_item2.png",
            text:"78人技术团队"
          },
          {
            imgUrl:"./static/images/about_us_item3.png",
            text:"3000+合作客户"
          }
        ],
        companyList:[],
        companyDetailImg:''
      };
    },
    created(){

    },
    mounted (){
      var _this=this;

      //_this.$des();
      _this.$get('/official-website/companyImage/getImageUrl',{}).then(data=>{
        var seller=JSON.stringify(data);
        //console.log('结果111:'+seller);
        _this.companyList=data.smallImageUrl;
        _this.companyDetailImg=data.bigImageUrl;
        _this.$ami('.aba-left',0,'center','0%',0.1,true);
        _this.$ami('.aba-right',0,'center','0%',0.1,true);
        _this.$nextTick(()=>{
          _this.$ami('.abmaml',0,'left','50%',1,true);
          _this.$ami('.abmamr',0,'right','50%',1,true);
          _this.$ami('.abmam-center',300,'center','0',0.1,true);
          _this.$ami('.aboutc-item img',0,'center','0',0.1,true);
          _this.$ami('.aboutn-item:nth-child(1)',0,'left','100%',0.1,true);
          _this.$ami('.aboutn-item:nth-child(2)',0,'center','0',0.1,true);
          _this.$ami('.aboutn-item:nth-child(3)',0,'right','100%',0.1,true);

        });
      });
    },
    components: {
      AboutUsDetail,
      Header
    },
    computed: {

    },
    methods: {

    },
    watch: {}
	}
</script>
