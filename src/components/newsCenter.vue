<template>
   <div class="news">
     <Header :currentN="partValue"></Header>
     <div class="banner">
       <div class="banner-text">用专业的技术，为您提供最佳的解决方案</div>
     </div>
     <div class="case">
       <PaginationHeader :url="casUrl"  @selectIndex="selectAxiox"></PaginationHeader>
       <ul class="case-body">
         <li class="casei-item" v-for="(attr,$index) in caseList" :key="$index" @click="goNewsDetail(attr.title)">
           <div class="casei-img"><img :src="attr.url" alt="图片"></div>
           <div class="newsi">
             <div class="newsi-text">{{attr.title}}</div>
             <div class="newsi-time"><span class="el-icon-time"></span>{{attr.newsTime}}</div>
             <div class="newsi-lead">{{attr.lead}}</div>
           </div>
         </li>
       </ul>
     </div>
     <Pagination :pages="totalPages" @selectPage="pageAxios"></Pagination>
   </div>
</template>

<style scoped>
  .banner{
    width: 100%;
    height: 4.2em;
    background-image: url("../../static/images/news_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-text{
    font-size: 0.48em;
    line-height: 1.5em;
    letter-spacing: 3px;
    color: #ffffff;
    text-shadow: 0px 3px 5px rgba(51, 51, 51, 0.5);
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
    margin:0em 0.3em 0.3em 0;
    box-shadow: 0px 0px 20px 0px rgba(203, 203, 203, 0.54);
    border-radius: 0.2em;
    height: 4.3em;
    overflow: hidden;
    cursor: pointer;
  }
  .casei-item:nth-child(3n){
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
    width: 3.75em;
    height: 2em;
    overflow: hidden;
  }
  .casei-img img{
    width: 100%;
    height: 100%;
  }
  .newsi{
    width: 3.28em;
    margin: 0.3em 0.24em 0.34em 0.24em;
    overflow: hidden;
    text-align: left;
  }
  .newsi-text{
    font-size: 0.24em;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .newsi-time{
    color: #999;
    font-size: 0.16em;
    margin:14px 0 10px 0;
  }
  .newsi-time span{
    display: inline-block;
    font-size: 1.5em;
    vertical-align: middle;
    margin-right: 7px;
  }
  .newsi-lead{
    font-size: 0.16em;
    color: #666;
    line-height: 2em;

    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
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
	import pagination from './pagination.vue'
	import Header from './header';
  import PaginationHeader from './paginationHeader';
  import Pagination from './pagination';

	export default {
    props:{
    },
    data () {
      return {
        partValue:3,
        caseList:[{}],
        caseIndex:0,
        casUrl:"/newsPageDetail/getNewsGroupName",
        totalPages:1,  //默认总页数为1
        currentNav:"公司新闻", //默认当前类别
        selectItemPage:1  ,//默认选中页面
        pageNumber:6  //默认每页显示条数
      };
    },
    created(){

    },
    mounted (){
      var _this=this;
      _this.$get('/newsPageDetail/getNewsPageDetail',{}).then(data=>{
        var seller=JSON.stringify(data);
        //console.log('结果:'+seller);
        _this.caseList=data.list;
        _this.totalPages=data.pages;
        _this.$nextTick(()=>{
          _this.$ami('.banner-text',100,'center','0%',0.1,true);
          _this.$ami('.case-body',500,'bottom','10%',1,true);
        });
      })
    },
    components: {
      Header,
      PaginationHeader,
      Pagination
    },
    computed: {

    },
    methods: {
      _caseSelect(event){
        var _this=this;
        _this.caseIndex=event;
      },
      selectAxiox(index){
        //console.log(index);
        var _this=this;
        _this.currentNav=index;
        var dataObject={
          pageNum:1,
          newsGroupName:_this.currentNav,
          pageSize:_this.pageNumber
        }
        //console.log(dataObject);
        _this.$get('/newsPageDetail/getNewsPageDetail',dataObject).then(data=>{
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
          newsGroupName:_this.currentNav,
          pageSize:_this.pageNumber
        }
        //console.log(dataObject);
        _this.$get('/newsPageDetail/getNewsPageDetail',dataObject).then(data=>{
          var seller=JSON.stringify(data);
          //console.log('结果:'+seller);
          _this.caseList=data.list;
          _this.totalPages=data.pages;
        })
      },
      goNewsDetail(event){
        //console.log(event);
        //this.$router.push({path: ''/order/index''});
        //this.$router.push({name:'/customerCaseDetail',params:{title:event}});
        this.$router.push({path:'/newsCenterDetail',query:{title:event}});

        //this.$route.query.name和this.$route.params.name。
      }
    },
    watch: {}
	}
</script>
