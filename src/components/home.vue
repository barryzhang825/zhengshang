<template>
  <div class="home">
    <Header :currentN="partValue"></Header>
    <!-- <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img class="swiperImg" src="../../static/images/banner.png" alt="">
          </div>
          <div class="swiper-slide">
              <img class="swiperImg" src="../../static/images/banner.png" alt="">
          </div>
        </div>
        <span class="swiper-pagination"></span>
      </div>
    </div> -->
    <!-- <ul>
      <li class="reveal-top">
          <img src="http://g.hiphotos.baidu.com/image/pic/item/37d3d539b6003af37401eb21392ac65c1038b633.jpg" class="img">
      </li>
      <li class="reveal-top">
          <img src="http://g.hiphotos.baidu.com/image/pic/item/37d3d539b6003af37401eb21392ac65c1038b633.jpg" class="img">
      </li>
    </ul>
    <div class="reveal-top" data-scroll-reveal="enter left and move 50px over 1.33s">dowebok.com</div> -->
    <div class="banner">
      <el-carousel trigger="click" height="6em" :loop="true">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img class="banner-item" :src="item.url" :alt="item.id">
          <div class="banner-text">{{item.text}}</div>
          <div class="banner-btn" v-show="index==0" @click="goContactUs">立即咨询</div>
        </el-carousel-item>
      </el-carousel>
      <!-- <div class="banner-btn">立即咨询</div> -->
    </div>
    <div class="service">
      <div class="home-plate">
        <div class="home-title">我们的服务</div>
        <div class="home-text">OUR SERVICES</div>
      </div>
      <ul class="service-main">
        <li class="service-item" v-for="(item,index) in serviceList" :key="index">
          <div class="service-img"><img :src="item.url" alt="项目图片"></div>
          <div class="service-title">{{item.title}}</div>
          <div class="service-text">{{item.text}}</div>
        </li>
      </ul>
    </div>
    <div class="case">
      <div class="home-plate">
        <div class="home-title">客户案例</div>
        <div class="home-text">CUSTOMER CASE</div>
      </div>
      <ul class="case-list">
        <li class="caselist-item" :class="{active:caseIndex==index}" v-for="(item,index) in caseList" :key="index" @click="_caseSelect(index,item.groupName)">{{item.groupName}}</li>
      </ul>
      <ul class="case-body">
         <li class="casei-item" v-if="$index<8" v-for="(attr,$index) in caseList[0].caseGroup" :key="$index" @click="goCaseDetail(caseIndex,attr.caseName)">
           <div class="casei-img"><img :src="attr.url" alt="图片"></div>
           <div class="casei-text">{{attr.caseName}}</div>
           <!-- {{caseList[0].caseGroup[0].url}} -->
         </li>
       </ul>
      <div class="case-btn" @click="goCase"><span>查看更多<i class="el-icon-d-arrow-right"></i></span></div>
    </div>
    <div class="project-progress">
      <div class="project-title">项目服务流程</div>
      <div class="project-title">PROJECT SERVICE PROCESS</div>
      <div class="project-main">
        <div class="project-item"><img src="../../static/images/service_process_item1.png" alt="进程"></div>
        <div class="project-icon"><img src="../../static/images/service_process_icon1.png" alt="箭头"></div>
        <div class="project-item pimg1"><img src="../../static/images/service_process_item2.png" alt="进程"></div>
        <div class="project-icon"><img src="../../static/images/service_process_icon2.png" alt="箭头"></div>
        <div class="project-item"><img src="../../static/images/service_process_item3.png" alt="进程"></div>
        <div class="project-icon"><img src="../../static/images/service_process_icon3.png" alt="箭头"></div>
        <div class="project-item pimg2"><img src="../../static/images/service_process_item4.png" alt="进程"></div>
        <div class="project-icon"><img src="../../static/images/service_process_icon4.png" alt="箭头"></div>
        <div class="project-item"><img src="../../static/images/service_process_item5.png" alt="进程"></div>
        <div class="project-icon"><img src="../../static/images/service_process_icon5.png" alt="箭头"></div>
        <div class="project-item pimg3"><img src="../../static/images/service_process_item6.png" alt="进程"></div>
      </div>
    </div>
    <div class="advantage">
      <div class="home-plate">
        <div class="home-title">我们的优势</div>
        <div class="home-text">OUR ADVANTAGES</div>
      </div>
      <div class="advantage-main">
        <ul class="advantage-main-ul">
        	<li class="adm-item" v-for="(item,index) in advantageList" :key="index">
            <div class="admi-img">
              <img :src="item.url" alt="">
            </div>
            <div class="admi-text">{{item.title}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="news">
      <div class="home-plate">
        <div class="home-title">新闻中心</div>
        <div class="home-text">NEWS</div>
      </div>
      <div class="mews-main">
        <div class="news-left" @click="goNewsDetail(newTitle)">
          <div class="news-img"><img :src="newImg" alt="新闻图片"></div>
          <div class="news-title">{{newTitle}}</div>
          <div class="news-text">{{newLead}}</div>
        </div>
        <ul class="news-right">
        	<li class="news-item" v-for="(item,index) in newsList" :key="index" @click="gonewsDetailItem(item.title)">
            <div class="newsitem-title">{{item.title}}</div>
            <div class="newsitem-text">{{item.lead}}</div>
            <img class="newsitem-icon" src="../../static/images/news_icon.png" alt="点击查看">
          </li>
        </ul>
      </div>
    </div>
    <div class="partner">
      <div class="home-plate">
        <div class="home-title">合作伙伴</div>
        <div class="home-text">PARTNER</div>
      </div>
      <ul class="partner-main">
      	<li class="partner-item" v-for="(item,index) in partnerList" :key="index"><img :src="item.url" alt="合作伙伴"></li>
      </ul>
    </div>
    <AboutUsDetail></AboutUsDetail>
   </div>
</template>
<script type='ecmascript-6'>
  import axios from 'axios'
  import Swiper from "swiper"
  import AboutUsDetail from './aboutUsdetail.vue'
  import Header from './header.vue';
  //import CustomerCaseDetail from './customerCaseDetail.vue';
	export default {
    props:{
    },
    data () {
      return {
        partValue:0,
        bannerList:[],
        serviceList:[],
        advantageList:[],
        newImg:"",
        newTitle:"",
        newLead:"",
        newsList:[],
        partnerList:[],
        full:"full",
        caseList:[{
          caseGroup:[{}]
        }],
        caseIndex:0,
        casUrl:"/official-website/index/getCustomerCase"
      }
    },
    created(){

    },
    mounted (){
      var _this=this;
      new Swiper ('.swiper-container', {
        followFinger : false,
        loop:true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        delay:100,
        observer:true,
        pagination : {
          el:'.swiper-pagination',
          type: 'custom',  //自定义
          renderCustom: function(swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i == current - 1) {
                customPaginationHtml +=
                  '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml +=
                  '<span class="swiper-pagination-customs"></span>';
              }
            }
            return '<span class="swiperPag">'+customPaginationHtml+'</span>';
          }
        }
      });


      //轮播图
      _this.$get('/official-website/index/getSlideshow',{}).then(data=>{
        var seller=JSON.stringify(data);
        //console.log('结果111:'+seller);
        var arrList = data;
        function compare(property){
          return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
          }
        }
        _this.bannerList=arrList.sort(compare('sort'));
        _this.$nextTick(()=>{
          //轮播图特效
          _this.$ami('.banner-btn',0,'left','100%',0.9,true);
          _this.$ami('.banner-text',0,'top','100%',0.3,true);
        });
      })
      //我们的服务
      _this.$get('/official-website/index/getOurService',{}).then(data=>{
        var seller=JSON.stringify(data);
      	//console.log('结果:'+seller);
        _this.serviceList=data;
        _this.$nextTick(()=>{
          //我们的服务
          _this.$ami('.service-item:nth-child(1)',0,'bottom','30%',0.9,true);
          _this.$ami('.service-item:nth-child(2)',300,'bottom','30%',0.9,true);
          _this.$ami('.service-item:nth-child(3)',600,'bottom','30%',0.9,true);
          _this.$ami('.service-item:nth-child(4)',900,'bottom','30%',0.9,true);
          _this.$ami('.service-item:nth-child(5)',1200,'bottom','30%',0.9,true);
        });
      }).catch(function (error) {
      		console.log(error);
      });
      //客户案例
      _this.$get('/official-website/index/getCustomerCase',{}).then(data=>{
        var seller=JSON.stringify(data);
      	//console.log('结果:'+seller);
        _this.caseList=data;
        //_this.caseList[0].caseGroup.length=10;
        _this.$nextTick(()=>{
          $(".case-list li").each(function(index,el){
            //console.log(index,el);
            _this.$ami(el,index*300,'top','100%',1,true);
          });
          _this.$ami('.case-body',500,'bottom','10%',1,true);
          _this.$ami('.case-btn',0,'left','30%',0.1,true);
        });
      }).catch(function (error) {
      		console.log(error);
      });
      _this.$nextTick(()=>{
        //项目服务流程
        _this.$ami('.project-title',0,'top','30%',0.1,true);
        _this.$ami('.project-main>div:nth-child(1)',0,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(2)',0,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(3)',600,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(4)',600,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(5)',900,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(6)',900,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(7)',1200,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(8)',1200,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(9)',1500,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(10)',1500,'top','30%',0.9,true);
        _this.$ami('.project-main>div:nth-child(11)',1800,'top','30%',0.9,true);
      });
      //我们的优势
      _this.$get('/official-website/index/getOurAdvantages',{}).then(data=>{
        var seller=JSON.stringify(data);
      	//console.log('结果:'+seller);
        _this.advantageList=data;
        _this.$nextTick(()=>{
        $(".adm-item").each(function(index,el){
          //console.log(index,el);
          if(index<5){
            _this.$ami(el,100,'bottom','30%',1,true);
          }
          if(5<index<10){
            _this.$ami(el,500,'bottom','30%',1,true);
          }
        });
        });
      }).catch(function (error) {
      		console.log(error);
      });
      //新闻中心
      _this.$get('/official-website/index/getNews',{}).then(data=>{
        var seller=JSON.stringify(data);
      	//console.log('结果:'+seller);
        //_this.advantageList=data.data;
        _this.newImg=data.url;
        _this.newTitle=data.title;
        _this.newLead=data.lead;
        _this.newsList=data.rightNews;
        _this.$nextTick(()=>{
          _this.$ami(".news-left",300,'left','20%',1,true);
          $(".news-item").each(function(index,el){
              _this.$ami(el,index*300,'right','10%',1,true);
          });
        });
      }).catch(function (error) {
      		console.log(error);
      });
      //合作伙伴
      _this.$get('/official-website/index/getPartner',{}).then(data=>{
        var seller=JSON.stringify(data);
      	//console.log('结果:'+seller);
        _this.partnerList=data;
        _this.$nextTick(()=>{
          $(".partner-item").each(function(index,el){
            //console.log(index,el);
            if(index<5){
              _this.$ami(el,100,'bottom','100%',1,true);
            }
            if(5<index<10){
              _this.$ami(el,300,'bottom','100%',1,true);
            }
          });
        });
      }).catch(function (error) {
      		console.log(error);
      });

    },
    components: {
      AboutUsDetail,
      Header
      //CustomerCaseDetail
    },
    computed: {

    },
    methods: {
      _caseSelect(event,name){
        var _this=this;
        _this.caseIndex=event;
        //console.log(event,name);
        if(event==0){
          location.reload();
        }else{
          this.$router.push({path:'/customerCase',query:{index:event,title:name}});
        }
      },
      goNewsDetail(event){
        this.$router.push({path:'/newsCenterDetail',query:{title:event}});
      },
      gonewsDetailItem(event){
        this.$router.push({path:'/newsCenterDetail',query:{title:event}});
      },
      goCaseDetail(index,titleStr){
        var _this=this;
        var name=_this.caseList[index].groupName;
        //console.log(name,titleStr);
        _this.$router.push({
          path:'/customerCaseDetail',
          query:{
            title:titleStr,
            caseGroupName:name,
          },
        });
      },
      goCase(){
        this.$router.push('/customerCase');
      },
      goContactUs(){
        this.$router.push('/contactUs');
      }
    },
    watch: {}
	}
</script>
<style scoped>
 .banner >>>.swiper-pagination-custom {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .banner >>>.swiper-pagination-customs {
    width: 30px;
    height: 6px;
    border-radius: 3px;
    display: inline-block;
    background: #fff;
    opacity: 1;
    margin: 0 5px;
  }
  .banner >>>.swiper-pagination-customs-active {
    opacity: 1;
    background-color: #f5ce30;
  }

  .banner-item{
    width: 100%;
    height: 600px;
  }
  .banner >>>.el-carousel__button{
    width: 30px;
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
    opacity: 1;
  }
  .banner >>>.el-carousel__indicator.is-active button{
    background-color: #f5ce30;
  }
  .banner{
    position: relative;
  }
  .banner-btn{
    position: absolute;
    bottom: 6.467em;
    left: 17.133em;
    font-size: 0.3em;
    color: #fff;
    letter-spacing: 2px;
    z-index: 100;
    width: 8em;
    height: 2.667em;
    line-height: 2.667em;
    text-align: center;
    border-radius: 1.3em;
    border: solid 2px #ffffff;
    cursor: pointer;
  }
  .banner-text{
    position: absolute;
    left: 360px;
    top: 192px;
    font-size: 0.48em;
    line-height: 1em;
    letter-spacing: 3px;
    color: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 20, 47, 0.54);
  }
  .home-plate{
    font-size: 0.36em;
    line-height: 1em;
    text-align: center;
  }
  .home-title{
    color: #333;
    margin-bottom: 0.58333em;
  }
  .home-text{
    color: #ccc;
  }
  .service{
    padding:0.7em 0 0 0;
  }
  .service-main{
    margin: 0.6em 3.6em 0 3.6em;
    display: flex;
    justify-content: flex-start;
  }
  .service-item{
    width: 2.8em;
    padding: 0 0 0.3em 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 0.3em 0px rgba(204, 204, 204, 0.54);
    border-radius: 10px;
    margin-right: 0.26em;
    text-align: center;
  }
  .service-item:hover{
    margin-top: -0.1em;
    box-shadow: 0px 0px 0.3em 0px rgba(24, 94, 224, 0.54);
  }
  .service-item:hover img{
    animation: mymove 5s linear;
  }
  /* Chrome, Safari, Opera */
  @-webkit-keyframes mymove {
    50% {-webkit-transform: rotate(360deg);}
  }
  @keyframes mymove {
    50% {transform: rotate(360deg);}
  }
  .service-img{
    margin:0.4em 0 0.3em 0;
  }
  .service-img img{
    width: 1.3em;
    height: 1.3em;
  }
  .service-title{
    font-size: 0.24em;
    color: #000000;
    line-height: 1em;
  }
  .service-text{
    font-size: 0.14em;
    color: #666666;
    line-height: 1.5em;
    text-align: left;
    letter-spacing: 1px;
    padding: 1.5em 1.5em 0 1.5em;
  }
  .case{
    padding:0.76em 3.7em 0.42em 3.7em;
    text-align: center;
  }
  .case-list{
    display: flex;
    justify-content: space-between;
    margin:0.55em 0.9em 0.1em 0.9em;
  }
  .caselist-item{
    font-size: 0.24em;
    color: #292c33;
    line-height: 2.5em;
    cursor: pointer;
  }
  .caselist-item.active{
    padding:0 1.3em;
    background-color: #f5ce30;
    color: #fff;
    border-radius: 1.26em;
  }
  .case-body{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0.5em;
  }
  .casei-item{
    margin:0.67em 0.41em 0 0;
    width: 2.6em;
    overflow: hidden;
  }
  .casei-item:nth-child(4n){
    margin-right: 0;
  }
  .casei-item:hover .casei-img{
    transform: scale(1.1);

    overflow: hidden;
  }
  .casei-text{
    font-size: 0.24em;
    line-height: 1em;
    color: #333;
  }
  .casei-img{
    width: 100%;
    height: 2.2em;
    margin-bottom: 0.4em;
    position: relative;
    border-radius: 0.1em;
    overflow: hidden;
  }
  /* .casei-img:after{
    position: absolute;
    content: "";
    left: -0.28em;
    bottom: -0.23em;
    width: 2.63em;
    height: 0.46em;
    background-image: url("../../static/images/Shadow.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: -1;
  } */
  .casei-img img{
    width: 100%;
    height: 100%;
    border-radius: 0.1em;
  }
  .case-btn span{
    display: inline-block;
    font-size: 0.24em;
    color: #185ee0;
    line-height: 3.3334em;
    width: 8.33333em;
    border:0.083333em solid #185ee0;
    border-radius: 2em;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .case-btn span:after{
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    border-radius: 2em;
  }
  .case-btn span:hover{
    animation: lookMore 1s linear;
    color: #fff;
  }
  .case-btn span:hover:after{
    animation: lookMoreBg 1s linear;
    width: 100%;
    background-color:#185ee0;
    z-index: -1;
  }
  @keyframes lookMore{
    0%{
      color: #185ee0;
    }
    100%{
      color: #fff;
    }
  }
  @keyframes lookMoreBg{
    0%{
      width: 0%;
      background-color:#fff;
    }
    100%{
      width: 100%;
      background-color:#185ee0;
    }
  }
  .project-progress{
    width: 100%;
    height: 6em;
    background-image: url("../../static/images/service_process_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .advantage{
    padding:0.88em 0 0 0;
  }
  .advantage-main-ul{
    overflow: hidden;
    padding:0.55em 3.5em 0 3.6em;
  }
  .adm-item{
    float: left;
    width: 2.8em;
    height: 3.28em;
    background-color: #ffffff;
    box-shadow: 0px 0px 0.5em 0px rgba(214, 214, 214, 0.54);
    border-radius: 0.1em;
    margin: 0 0.26em 0.24em 0;
  }
  .adm-item:nth-child(4n){
    margin-right: 0;
  }
  .adm-item:hover{
    box-shadow: 0 0 0.3em #185ee0;
  }
  .adm-item:hover img{
    animation: advantagemove 5s linear;
  }
  .admi-img{
    height:2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .admi-text{
    font-size: 0.24em;
    color: #333333;
    text-align: center;
  }
  .news{
    margin:0.58em 0 0 0;
  }
  .mews-main{
    margin:0.5em 3.6em 0 3.6em;
    display: flex;
    justify-content: space-between;
  }
  .news-img{
    width: 4em;
    height: 3.12em;
    overflow: hidden;
  }
  .news-img img{
    width: 100%;
    height: 100%;
  }
  .news-left:hover img{
    animation: fadeIn 1s linear;
  }
  .news-title{
    font-size: 0.24em;
    color: #333;
    margin:0.8em 1.54em 0.834em 1.54em;
    line-height: 1em;
  }
  .news-text{
    font-size: 0.14em;
    color: #333;
    margin:0 2.628em 2em 2.628em;
    line-height: 1.7143em;
  }
  .news-title,.news-text{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
  }
  .news-left{
    box-shadow: 0px 0px 0.2em 0px #cccccc;
    border-radius: 0.2em;
    width: 4em;
    cursor: pointer;
  }
  .newsitem-title{
    font-size: 0.24em;
    color: #333;
  }
  .newsitem-text{
    font-size: 0.16em;
    color: #333;
  }
  .news-item{
    width: 7.4em;
    height: 1.4em;
    background-color: #ffffff;
    box-shadow: 0px 0px 0.2em 0px #cccccc;
    border-radius: 0.1em;
    position: relative;
    margin-bottom: 0.3em;
    cursor: pointer;
  }
  .news-item:last-child{
    margin-bottom: 0;
  }
  .news-item:hover{
    box-shadow: 0 0 0.3em #185EE0;
  }
  .newsitem-title{
    font-size: 0.24em;
    color: #333;
    padding:1em 4.58333em 0em 1.5833333em;
    line-height: 1em;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    position: static;
    text-align: left;
  }
  .newsitem-text{
    font-size: 0.16em;
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin:1.375em 6.875em 1.375em 2.375em;
    text-align: left;
  }
  .newsitem-icon{
    position: absolute;
    right: 0.27em;
    top: 0.52em;
    cursor: pointer;
  }
  .partner{
    margin:0.63em 3.6em 0 3.6em;
  }
  .partner-main{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 0.68em;
  }
  .partner-item{
    width: 1.97em;
    height: 1.2em;
    box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.75);
    margin:0 0.5em 0.46em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .partner-item:nth-child(5n){
    margin-right: 0
  }
  .partner-item:hover{
    box-shadow: 0 0 0.1em #185ee0;
  }
  .partner-item:hover img{
    animation: advantagemove 1s linear;
  }
  .about{
    margin:0.2em 3.6em 0 3.6em;
  }
  .about-main{
    display: flex;
    justify-content: space-between;
    margin: 0.55em 0 0.46em 0;
  }
  .about-text{
    margin: 0.25em 0 0 0.38em;
  }
  .about-text >>>p{
    font-size: 0.18em;
    line-height: 2.22em;
    color: #1a1a1a;
    text-align: left;
    text-indent:2em;
    margin-bottom: 2.34em;
  }

  .about-text p:last-child{
    margin-bottom:0;
  }

  .project-title{
    text-align: center;
    font-size: 0.36em;
    line-height: 1em;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .project-title:first-child{
    padding:1.39em 0 0.5556em 0;
  }
  .project-main{
    margin: 0.64em 3.6em 0 3.6em;
    display: flex;
    justify-content: flex-start;
  }
  .project-item img{
    width:1.76em;
    height: auto;
    margin-left: -0.2em;
  }
  .project-item:first-child img{
    margin-left: -0.16em;
  }
  .project-icon img{
    width:0.73em;
    height: 0.56em;
    margin: 1.3em 0 0 -0.2em;
  }
  .project-item.pimg1{
    margin: 0.98em 0 0 0;
  }
  .project-item.pimg2{
    margin: 1.26em 0 0 0;
  }
  .project-item.pimg3{
    margin:1.05em 0 0 0;
  }
  /* Chrome, Safari, Opera */
  @-webkit-keyframes advantagemove {
    100% {-webkit-transform: rotateY(360deg);}
  }
  @keyframes advantagemove {
    100% {transform: rotateY(360deg);}
  }
  /* Chrome, Safari, Opera */
  @-webkit-keyframes fadeIn {
    100% {-webkit-transform: scale(1.2);}
  }
  @keyframes fadeIn {
    100% {transform: scale(1.2);}
  }
</style>
