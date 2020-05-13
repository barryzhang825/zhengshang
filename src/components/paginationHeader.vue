<template>
  <div>
    <ul class="case-list">
      <li class="caselist-item" :class="{active:caseIndex==index}" v-for="(item,index) in pageHeaderList" :key="index" @click="_caseSelect(index,item)">{{item}}</li>
    </ul>
  </div>
</template>

<style scoped>
  .case{
    margin:0.6em 3.6em 0 3.6em;
  }
  .case-list{
    display: flex;
    justify-content: space-around;
    margin:0.55em 0.9em 0.55em 0.9em;
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

</style>
<script type='ecmascript-6'>
	// import axios from 'axios'
	//import Header from './../Header';


	export default {
    props:{
      url:{
        type:String
      },
      current:{
        type:Number,
        default:0
      }
    },
    data () {
      return {
        pageHeaderList:[],
        caseIndex:0
      };
    },
    created(){

    },
    mounted (){
      var _this=this;
      _this.$get(_this.url,{}).then(data=>{
        var seller=JSON.stringify(data);
        //console.log('结果:'+seller);
        _this.pageHeaderList=data;
        _this.$nextTick(()=>{
          //console.log(_this.current);
          _this.caseIndex=_this.current;
          $(".case-list li").each(function(index,el){
            _this.$ami(el,index*300,'top','100%',1,true);
          });
        });
      })
    },
    components: {

    },
    computed: {

    },
    methods: {
      _caseSelect(event,item){
        var _this=this;
        _this.caseIndex=event;
        //console.log(item);
        _this.$emit('selectIndex', item);
      }
    },
    watch: {}
	}
</script>
