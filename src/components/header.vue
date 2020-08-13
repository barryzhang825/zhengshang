<template>
   <div class="header" @mouseleave="isMenuShow=false">
     <div class="header-content"  >
       <div class="header-logo" @click="goHome"><img src="../../static/images/logo.png" alt="公司logo"></div>
       <div class="header-nav" @mouseover="isMenuShow=true" >
         <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex">
           <el-menu-item v-for="(item,index) in navList" :key="index" @click="reLoad"><router-link :class="{active:currentN==index}" class="nav-text" tag="div" :to="{name:item.url}">{{item.text}}</router-link></el-menu-item>
         </el-menu>
       </div>
	   <div class="phone"><img src="../../static/images/phone.png" alt=""><span>0371-55150821</span></div>
     </div>

     <transition name="fade">
       <div v-if="isMenuShow" class="menu-tag">
         <div class="menu-center">
           <div class="center-left">
             <div class="item-title">业务领域</div>
             <div class="lists">
               <div class="list" v-for="item in businessItems">
                 <div class="list-title">
                   <div class="dot"></div>
                   <div class="text"  @click="goTo(item.url)">{{item.title}}</div>
                 </div>
                 <div class="list-content">
                   <div class="list-item" @click="goTo(item.url)" v-for="item2 in item.items">{{item2}}</div>
                 </div>
               </div>
             </div>
           </div>
           <div class="center-right">
             <div class="right-top">
               <div class="right-left">
                 <div class="item-title" @click="goTo(caseUrl)">客户案例</div>
                 <div class="right-items">
                   <div class="item" v-for="item in caseList" @click="goTo(caseUrl)">{{item}}</div>
                 </div>
               </div>
               <div class="right-left">
                 <div class="item-title" @click="goTo(newsUrl)">新闻中心</div>
                 <div class="right-items">
                   <div class="item" v-for="item in newsList" @click="goTo(newsUrl)">{{item}}</div>
                 </div>
               </div>
             </div>
             <div class="right-bottom">
               <img src="../assets/images/dianhua.png" alt="">
               <div class="number">0371-55150821</div>
             </div>
           </div>
         </div>
       </div>
     </transition>
   </div>
</template>
<script >
  export default {
    props:{
      currentN:{
        type:Number
      }
    },
    data () {
      return {
        isMenuShow: false,
        businessItems: [
          {
            title: 'APP开发',
            items: ['社交', '交友', '跑腿', '直播', '教育', '外卖', '团购', '医疗',],
            url:'/application'
          },
          {
            title: '系统集成',
            items: ['ERP企业管理系统', '报表管理系统', 'CRM客户管理系统', '日程管理系统', '客户管理系统', '项目管理系统'],
            url:'/business'
          },
          {
            title: '小程序开发',
            items: ['展示小程序', '平台直播', '商城小程序       ', '相亲交友', '社区团购', '其他'],
            url:'/mini-program'
          },
          {
            title: '政务云',
            items: ['政府OA办公系统', '档案管理系统', '人事管理系统', '采购管理系统', '流程管理系统', '会议管理系统'],
            url:'/gov-cloud'
          },
          {
            title: '网站建设',
            items: ['企业官网', '行业门户     ', '社区论坛', '电商网站'],
            url:'/web-construct'
          },
          {
            title: '物联网',
            items: ['人工智能', '人脸识别     ', '硬件设备', '语音系统'],
            url:'/things'
          }
        ],
        caseList: ['APP开发', '小程序开发', '网站建设', '系统集成', '物联网', '政务云'],
        caseUrl:'/customerCase',
        newsUrl:'/newsCenter',
        newsList: ['公司新闻', '项目签约', '行业动态', '技术专栏'],
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
      goTo(path){
        this.$router.push({
          path:path
        })
      },
      showMenus(){
        console.log('hover')
        this.isMenuShow=true
      },
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
<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .menu-tag {
    z-index: 9999999999999999 !important;
    width: 100%;
    min-width: 1200px;

    .menu-center {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .center-left {
        height: 100%;
        width: 50%;
        padding-right: 80px;
        box-sizing: border-box;

        .item-title {
          width: 206px;
          border-bottom: 2px solid #DDDDDD;
          padding: 29px 0;
          font-size: 24px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 23px;
          margin-bottom: 24px;
          text-align: left;
        }

        .lists {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;

          .list {
            width: 45%;
            display: flex;
            flex-direction: column;
            margin-bottom: 29px;

            .list-title {
              width: 100%;
              display: flex;
              align-items: center;
              margin-bottom: 21px;
              text-align: left;

              .dot {
                width: 8px;
                height: 8px;
                background: rgba(24, 94, 224, 1);
                border-radius: 50%;
              }

              .text {
                cursor: pointer;
                margin-left: 6px;
                font-size: 20px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                line-height: 23px;
              }
            }

            .list-content {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              flex-wrap: wrap;


              .list-item {
                cursor: pointer;
                font-size: 16px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 23px;
                min-width: 33.3%;
                margin-bottom: 15px;
                white-space: pre-wrap;
                text-align: left;
              }

              .list-item:hover {
                color: rgba(255, 131, 56, 1);
              }
            }

          }
        }
      }

      .center-right {
        height: 100%;
        width: 50%;
        padding-left: 80px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        .right-top {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .right-left {
            .item-title {
              width: 206px;
              border-bottom: 2px solid #DDDDDD;
              padding: 29px 0;
              font-size: 24px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              line-height: 23px;
              text-align: left;
              margin-bottom: 24px;
            }

            .right-items {
              display: flex;
              flex-direction: column;

              .item {
                width: 50% !important;
                cursor: pointer;
                font-size: 16px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 23px;
                margin-bottom: 19px;
                text-align: left;
              }

              .item:hover {
                color: #FF8338;
              }
            }
          }
        }

        .right-bottom {
          margin-top: 70px;
          width: 100%;
          display: flex;
          align-items: center;

          .number {
            font-size: 46px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 60px;
            margin-left: 57px;
          }
        }
      }
    }
  }


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


