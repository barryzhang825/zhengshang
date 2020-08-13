<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- <keep-alive>
    	<router-view></router-view>
    </keep-alive> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  // import axios from 'axios'
  import Footer from './components/footer.vue';

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


    },
    components: {
      Footer
    },
    computed: {

    },
    methods: {

    },
    watch: {}
  }
</script>

<style>
  @import "./common/reset.css";
  #app {
    font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
