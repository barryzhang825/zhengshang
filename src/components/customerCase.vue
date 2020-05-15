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
    <div class="case">
      <PaginationHeader :url="casUrl" :current="currentIndex" @selectIndex="selectAxiox"></PaginationHeader>
      <ul class="case-body">
        <li class="casei-item" v-for="(attr,$index) in caseList" :key="$index" @click="goCaseDetail(attr.caseName)">
          <div class="casei-img"><img :src="attr.url" alt="图片"></div>
          <div class="casei-text">{{attr.caseName}}</div>
        </li>
      </ul>
    </div>
    <Pagination :pages="totalPages" @selectPage="pageAxios"></Pagination>
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
    margin:1.4em 3.6em 0 0;
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
  .case{
    margin:0.6em 3.6em 0 3.6em;
  }
  .case-body{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0.5em;
  }
  .casei-item{
    margin:0em 0.24em 0.43em 0;
    cursor: pointer;
    width: 2.8em;
    overflow: hidden;
  }
  .casei-item:nth-child(4n){
    margin-right: 0;
  }
  .casei-item:hover .casei-img{
    animation: fadeIn 1s linear;
  }
  .casei-text{
    font-size: 0.24em;
    line-height: 1em;
    color: #333;
    padding-top: 1.25em;
  }
  .caseii-half{
    width: 2.8em;
    height: 2.8em;
  }
  .casei-img{
    width: 2.8em;
    height: 2.8em;
    overflow: hidden;
  }
  .casei-img img{
    width: 100%;
  }
  /* Chrome, Safari, Opera */
  @-webkit-keyframes fadeIn {
    100% {-webkit-transform: scale(1.1);}
  }
  @keyframes fadeIn {
    100% {transform: scale(1.1);}
  }
</style>
<script type='ecmascript-6'>
	import Header from './header';
  //import CustomerCaseDetail from './customerCaseDetail.vue';
  import PaginationHeader from './paginationHeader';
  import Pagination from './pagination';

	export default {
    props:{
    },
    data () {
      return {
        partValue:2,
        caseList:[],
        caseIndex:0,
        casUrl:"/customerCase/getCustomerCaseGroupName",
        totalPages:1,  //默认总页数为1
        currentNav:"APP开发", //默认当前类别
        selectItemPage:1  ,//默认选中页面
        pageNumber:8,  //默认每页显示条数
        currentIndex:0
      };
    },
    created(){

    },
    beforeMount(){

    },
    mounted (){
      var _this=this;
      //console.log(Number(_this.$route.query.index),_this.$route.query.title);
      if(_this.$route.query.title){
        _this.currentNav=_this.$route.query.title;
        _this.currentIndex=Number(_this.$route.query.index);
        var dataObject={
          pageNum:1,
          caseGroupName:_this.currentNav,
          pageSize:_this.pageNumber
        }

      }else{
        var dataObject={

        }
      }

      _this.$get('/customerCase/getCustomerCaseByPage',dataObject).then(data=>{
        var seller=JSON.stringify(data);
        //console.log('结果:'+seller);
        _this.caseList=data.list;
        _this.totalPages=data.pages;
        //console.log(_this.totalPages);
        _this.$nextTick(()=>{
          _this.$ami('.cusban-phone',0,'left','30%',0.5,true);
          _this.$ami('.cusban-title',0,'right','30%',0.5,true);
          _this.$ami('.case-body',500,'bottom','10%',1,true);
        });
      })
    },
    components: {
      Header,
      //CustomerCaseDetail,
      PaginationHeader,
      Pagination
    },
    computed: {

    },
    methods: {
      selectAxiox(index){
        //console.log(index);
        var _this=this;
        _this.currentNav=index;
        var dataObject={
          pageNum:1,
          caseGroupName:_this.currentNav,
          pageSize:_this.pageNumber
        }
        _this.$get('/customerCase/getCustomerCaseByPage',dataObject).then(data=>{
          var seller=JSON.stringify(data);
          //console.log('结果:'+seller);
          _this.caseList=data.list;
          _this.totalPages=data.pages;
          _this.$nextTick(()=>{
            _this.$ami('.case-body',500,'bottom','10%',1,true);
          });
        })
      },
      pageAxios(page){
        //console.log(page);
        var _this=this;
        _this.selectItemPage=page;
        var dataObject={
          pageNum:_this.selectItemPage,
          caseGroupName:_this.currentNav,
          pageSize:_this.pageNumber
        }
        //console.log(dataObject);
        _this.$get('/customerCase/getCustomerCaseByPage',dataObject).then(data=>{
          var seller=JSON.stringify(data);
          //console.log('结果:'+seller);
          _this.caseList=data.list;
          _this.totalPages=data.pages;
        })
      },
      goCaseDetail(ag){
        var _this=this;
        _this.$router.push({
          path:'/customerCaseDetail',
          query:{
            title:ag,
            caseGroupName:_this.currentNav,
          },
        });
      }
    },
    watch: {}
	}
</script>
