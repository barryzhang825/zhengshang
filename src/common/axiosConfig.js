import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'
// 响应时间
axios.defaults.timeout = 30* 1000
axios.defaults.withCredentials = true
var UserInfo=JSON.parse(sessionStorage.getItem("userData"))||{};
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

var UserInfo=JSON.parse(sessionStorage.getItem("userinfo"));
var paths=window.location.pathname;
var asas=document.location.href;
var hrefHeader=asas.substr(0,4);
// console.log(document.location.href,hrefHeader,hrefHeader!='https');
  if(UserInfo==null&&paths!='/login'&&paths!='/regist'&&paths!='/logginBind'&&!UserInfo&&paths!='/login'&&paths!='/'){
      setTimeout(function(){
        window.location.href='https://zhibo.yingcaiyuanfu.com'
      },500);
  }
  else if(hrefHeader!='https'&&sessionStorage.getItem('https')!=1){
    sessionStorage.setItem('https',1);
      // setTimeout(function(){
      //     window.location.href='https://zhibo.yingcaiyuanfu.com'
      // },500);
  }
Vue.prototype.$static =''
function ser(obj) {
  var ne = {};
  for (var i in obj) {
    ne["data." + i] = obj[i];
  }
  return ne;
};
axios.defaults.baseURL = 'https://zhiboapi.yingcaiyuanfu.com'
// axios.defaults.baseURL = 'http://192.168.10.168:8787'
axios.interceptors.request.use(
  config => {
    var UserInfo=JSON.parse(sessionStorage.getItem("userinfo"));
    if(config.method === 'get'&&config.params.url){
      config.baseURL=config.params.url
    }
    if(config.method==='get'){
      config.params={
        pageIndex:config.params.pageIndex||1,
        PageSize:config.params.pageSize||20, 
        ...ser(config.params)
      }
    }
    return config
  },
  err => {
    Message.error('请求错误')
    return 
    // Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    // console.log(err)
    // debugger
    Message.error('请求失败，请稍后再试');
    return 
    // Promise.reject(err);
    // Promise.reject(err)
  }
)

export function fetchPost (url, params,login) {
  if(login==1){
    var data={};
    data.operaterID='';
    data.operater='';
    data.data=params;
    params=data
  }else{
    var data={};
    data.operaterID=UserInfo.UserInfo.Id||'';
    data.operater=UserInfo.UserInfo.Account||'';
    data.data=params;
    params=data
  }
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
          //Promise.reject(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}
export function fetchPut (url, params) {
  var data={};
  data.operaterID='';
  data.id='';
  data.operater='';
  data.data=params;
  params=data
  return new Promise((resolve,reject) => {
    axios
      .put(url, params)
      .then(
        res => {
          resolve(res)
          //Promise.reject(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}
export function fetchDelete (url, params,type) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, param)
      .then(
        res => {
          resolve(res)
          //Promise.reject(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}
export function fetchGet (url, params,type) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        // console.log(res)
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}