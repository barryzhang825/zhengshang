<template>
  <div class="mini-program">
    <Header></Header>
    <Background :type-index="3"></Background>
    <div class="center">
      <div class="business">
        <div class="title">可开发行业</div>
        <div class="content">
          <div class="left">
            <div class="left-title">{{textList[selectedIndex].title}}</div>
            <div class="left-item" v-for="item in textList[selectedIndex].itemList">
              <div class="line1">{{item.title}}</div>
              <div class="line2">{{item.context}}</div>
            </div>
            <div class="more">
              <div class="text">了解更多</div>
              <img src="../assets/images/more1.png" alt="">
            </div>
          </div>
          <div class="right">
            <img class="active-item0" src="../assets/images/circle.png" alt="">
            <div class="item item0 active-item4" :class="selectedIndex==3?'selected':''" @mouseenter="selectChange(3)">
              <img class="visible" src="../assets/images/kk0.png" alt="">
              <img class="hidden" src="../assets/images/kkh0.png" alt="">
              <div class="text">社交</div>
            </div>
            <div class="item item1 active-item1" :class="selectedIndex==0?'selected':''" @mouseenter="selectChange(0)">
              <img class="visible" src="../assets/images/kk1.png" alt="">
              <img class="hidden" src="../assets/images/kkh1.png" alt="">
              <div class="text">直播</div>
            </div>
            <div class="item item2 active-item3" :class="selectedIndex==2?'selected':''" @mouseenter="selectChange(2)">
              <img class="visible" src="../assets/images/kk2.png" alt="">
              <img class="hidden" src="../assets/images/kkh2.png" alt="">
              <div class="text">教育</div>
            </div>
            <div class="item item3 active-item2" :class="selectedIndex==1?'selected':''" @mouseenter="selectChange(1)">
              <img class="visible" src="../assets/images/kk3.png" alt="">
              <img class="hidden" src="../assets/images/kkh3.png" alt="">
              <div class="text">医疗</div>
            </div>
            <div class="item item4 active-item9" :class="selectedIndex==8?'selected':''" @mouseenter="selectChange(8)">
              <img class="visible" src="../assets/images/kk4.png" alt="">
              <img class="hidden" src="../assets/images/kkh4.png" alt="">
              <div class="text">健身</div>
            </div>
            <div class="item item5 active-item8" :class="selectedIndex==7?'selected':''" @mouseenter="selectChange(7)">
              <img class="visible" src="../assets/images/kk5.png" alt="">
              <img class="hidden" src="../assets/images/kkh5.png" alt="">
              <div class="text">团购</div>
            </div>
            <div class="item item6 active-item7" :class="selectedIndex==6?'selected':''" @mouseenter="selectChange(6)">
              <img class="visible" src="../assets/images/kk6.png" alt="">
              <img class="hidden" src="../assets/images/kkh6.png" alt="">
              <div class="text">外卖</div>
            </div>
            <div class="item item7 active-item6" :class="selectedIndex==5?'selected':''" @mouseenter="selectChange(5)">
              <img class="visible" src="../assets/images/kk7.png" alt="">
              <img class="hidden" src="../assets/images/kkh7.png" alt="">
              <div class="text">跑腿</div>
            </div>
            <div class="item item8 active-item5" :class="selectedIndex==4?'selected':''" @mouseenter="selectChange(4)">
              <img class="visible" src="../assets/images/kk8.png" alt="">
              <img class="hidden" src="../assets/images/kkh8.png" alt="">
              <div class="text">交友</div>
            </div>
          </div>
        </div>
      </div>
      <div class="progress">
        <div class="title">小程序开发流程</div>
        <div class="content">
          <div class="left">
            <img src="../assets/images/pro00.png" alt="">
          </div>
          <div class="right">
            <div class="items">
              <div class="item " id="item1" :class="progressIndex==(4*progressPage+index)?'selected':''"
                   v-for="(item,index) in progressList"
                   @click="selectProgress(4*progressPage+index)">
                <div class="line1">
                  <div class="text">{{item.title}}</div>
                  <div class="num">{{item.num}}</div>
                </div>
                <div class="line2">
                  {{item.context}}
                </div>
              </div>
            </div>
            <div class="pagination">
              <div class="right">
                <img v-if="progressPage==0" src="../assets/images/left-gray.png" alt="">
                <img v-else src="../assets/images/left-blue.png" @click="changePage(-1)">
                <img v-if="progressPage==1" src="../assets/images/right-gray.png" alt="">
                <img v-else src="../assets/images/right-blue.png" @click="changePage(1)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="delivery-standard">
      <div class="deliver-center">
        <div class="deliver-title">交付标准</div>
        <div class="items">
          <div class="item active-item10">
            <div class="circle">
              <img src="../assets/images/q1.png" alt="">
            </div>
            <div class="text">产品文档</div>
          </div>
          <div class="item active-item10">
            <div class="circle">
              <img src="../assets/images/q2.png" alt="">
            </div>
            <div class="text">设计稿源文件</div>
          </div>
          <div class="item active-item10">
            <div class="circle">
              <img src="../assets/images/q3.png" alt="">
            </div>
            <div class="text">源代码</div>
          </div>
          <div class="item active-item10">
            <div class="circle">
              <img src="../assets/images/q4.png" alt="">
            </div>
            <div class="text">使用文档</div>
          </div>
          <div class="item active-item10">
            <div class="circle">
              <img src="../assets/images/q5.png" alt="">
            </div>
            <div class="text">账号信息</div>
          </div>
        </div>
      </div>
    </div>
    <div class="system-standard">
      <div class="system-center">
        <div class="title">系统安全标准</div>
        <div class="items">
          <div class="item">
            <div class="item-title">源代码安全</div>
            <div class="li">
              <img src="../assets/images/ss1.png" alt="">
              <div class="text">防SQL注入</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss3.png" alt="">
              <div class="text">过滤拦截机制</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss4.png" alt="">
              <div class="text">并发安全机制</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss1.png" alt="">
              <div class="text">
                加密(MDS、RSA、<br>
                DES)
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-title">程序安全</div>
            <div class="li">
              <img src="../assets/images/ss5.png" alt="">
              <div class="text">身份认证机制</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss6.png" alt="">
              <div class="text">权限控制</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss7.png" alt="">
              <div class="text">渗透测试</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss8.png" alt="">
              <div class="text">日志追踪</div>
            </div>
          </div>
          <div class="item">
            <div class="item-title">数据库安全</div>
            <div class="li">
              <img src="../assets/images/ss9.png" alt="">
              <div class="text">双机容错</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss10.png" alt="">
              <div class="text">数据备份</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss11.png" alt="">
              <div class="text">灾难恢复</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss12.png" alt="">
              <div class="text">
                数据存储(基于RAID<br>
                的存储技术)
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-title">服务器安全</div>
            <div class="li">
              <img src="../assets/images/ss13.png" alt="">
              <div class="text">防火墙</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss14.png" alt="">
              <div class="text">入侵检测</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss15.png" alt="">
              <div class="text">漏洞扫描</div>
            </div>
            <div class="li">
              <img src="../assets/images/ss16.png" alt="">
              <div class="text">物理隔离</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="technology-support">
      <div class="title">
        技术支持
      </div>
      <div class="items">
        <div class="item active-item11">
          <img src="../assets/images/j1.png" class="item-img" alt="">
          <div class="item-title">程序使用培训</div>
        </div>
        <div class="item active-item11">
          <img src="../assets/images/j2.png" class="item-img" alt="">
          <div class="item-title">项目问题咨询</div>
        </div>
        <div class="item active-item11">
          <img src="../assets/images/j3.png" class="item-img" alt="">
          <div class="item-title">项目部署及维护</div>
        </div>
        <div class="item active-item11">
          <img src="../assets/images/j4.png" class="item-img" alt="">
          <div class="item-title">后期功能升级和修改</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../components/HomeHeader";
  import Background from "../components/Background";

  export default {
    name: "MiniProgram",
    components: {
      Header: Header,
      Background: Background,
    },
    data() {
      return {
        progressIndex: 0,
        selectedIndex:0,
        progressPage:0,
        textList:[
          {
            title:'直播类小程序',
            itemList:[
              {
                title:'多渠道预热，蓄水前置流量',
                context:'提前曝光直播内容，社群、首页、详情页开启活动预热'
              },
              {
                title:'全场景推广，快速引流获客',
                context:'直播导购、产品展示、新品发布、助力商家“流量"变成“销量”'
              },
              {
                title:'边看边买，导购在线推荐',
                context:'在线演示增强信任，OMG热搜式销货，提高转化'
              }
            ]
          },
          {
            title:'医疗类小程序',
            itemList:[
              {
                title:'在线服务，打破传统问诊方式',
                context:'提供在线问诊、找药品、看科普等服务'
              },
              {
                title:'\n' +
                  '打造医患之间的实时互动交流平台',
                context:'通过免费提问或付费指定的方式联系平台医生'
              },
              {
                title:'快速检索并定位医院，实现在线预约、挂号服务',
                context:'根据医院、科室、疾病、地区等维度快速找医生'
              }
            ]
          },
          {
            title:'教育类小程序',
            itemList:[
              {
                title:'在线刷题，打卡，计时等功能',
                context:'为考试提供便捷刷题体验，备考工具一应俱全'
              },
              {
                title:'社交圈子，打造互动生态平台',
                context:'方便考生之间互动交流，实现线上备考交流平台'
              },
              {
                title:'增值营销，积分商城',
                context:'积分系统，实现学员与学员之间的传递转发'
              }
            ]
          },
          {
            title:'社交类小程序',
            itemList:[
              {
                title:'发布动态，发布话题，话题的留言',
                context:'多功能覆盖平台，占有绝对优势'
              },
              {
                title:'社交圈子，打造互动生态平台',
                context:'健全隐私保护机制，提供分享与表达的多类内容选择'
              },
              {
                title:'结合当下热门功能，提升产品优势',
                context:'优化社群环境，增强关系链，提升用户粘度'
              }
            ]
          },
          {
            title:'交友类小程序',
            itemList:[
              {
                title:'打破技术壁垒，开发算法潜能',
                context:'隐私保护机制，提供公众技术安全'
              },
              {
                title:'社交圈子，打造互动生态平台',
                context:'精准地满足用户需求，带来流量变现'
              },
              {
                title:'抓住求知欲， 标新立异，提升产品优势',
                context:'结合创新的方式，发掘用户的需求与兴趣，脱颖而出'
              }
            ]
          },
          {
            title:'跑腿类小程序',
            itemList:[
              {
                title:'页面布局清晰，订单分类明确',
                context:'接单模式灵活，多劳多得'
              },
              {
                title:'算法优化，智能路线规划',
                context:'精准地提供配送路线，择优选择'
              },
              {
                title:'金额复核，保障资金安全',
                context:'户复核订单的重量与距离，调整价格误差'
              }
            ]
          },
          {
            title:'外卖类小程序',
            itemList:[
              {
                title:'活动拼单，免成本推广宣传',
                context:'解决传统参与外卖市场痛点，形成良性循环的生态'
              },
              {
                title:'算法优化，智能路线规划',
                context:'精准地提供配送路线，择优选择'
              },
              {
                title:'金额复核，保障资金安全',
                context:'户复核订单的重量与距离，调整价格误差'
              }
            ]
          },
          {
            title:'团购类小程序',
            itemList:[
              {
                title:'活动拼单，免成本推广宣传',
                context:'解决传统参与电商市场痛点，形成良性循环的生态'
              },
              {
                title:'页面布局清晰，订单分类明确',
                context:'商圈搜索，清晰商品和商家分类信息'
              },
              {
                title:'信息系统的搭建，社群运营，扩张性强',
                context:'引导向专业化、职业化团长发展'
              }
            ]
          },
          {
            title:'健身类小程序',
            itemList:[
              {
                title:'数据追踪记录，便携移动设备平台',
                context:'运动轨迹进行追踪记录，精确数据分析用户群体概况'
              },
              {
                title:'私密社交，打造互动生态平台',
                context:'精准地满足用户需求 ， 带来流量变现'
              },
              {
                title:'电商平台，积分，课程系统接入',
                context:'提高健身资源的整合力度，多元化平台系统功能'
              }
            ]
          },
        ],
        progressList:[
          {
            num:'01',
            title:'行业数据分析',
            context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
          },
          {
            num:'02',
            title:'品牌定位规范',
            context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
          },
          {
            num:'03',
            title:'交互视觉设计',
            context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
          },
          {
            num:'04',
            title:'行业数据分析',
            context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
          }
        ],
      }
    },
    methods: {
      changePage(index){
        this.progressPage+=index
        if(this.progressPage==1){
          this.progressList=[
            {
              num:'05',
              title:'品牌定位规范',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'06',
              title:'交互视觉设计',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'07',
              title:'行业数据分析',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
          ]
        }else {
          this.progressList=[
            {
              num:'01',
              title:'行业数据分析',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'02',
              title:'品牌定位规范',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'03',
              title:'交互视觉设计',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
            {
              num:'04',
              title:'行业数据分析',
              context:'甲方乙方组建团队，了解项目需求，进行行业数据分析，甲方乙方组建团队'
            },
          ]
        }
      },
      selectChange(index){
        this.selectedIndex=index
      },
      selectProgress(index) {
        this.progressIndex = index

        // switch (index) {
        //   case 1:
        //     break;
        //   case 2:
        //     document.getElementById('item1').scrollIntoView({block: 'start', behavior: 'smooth'})
        //     break;
        //   case 3:
        //     document.getElementById('item2').scrollIntoView({block: 'start', behavior: 'smooth'})
        //     break;
        //   case 4:
        //     document.getElementById('item3').scrollIntoView({block: 'start', behavior: 'smooth'})
        //     break;
        //   case 5:
        //     document.getElementById('item4').scrollIntoView({block: 'start', behavior: 'smooth'})
        //     break;
        //   case 6:
        //     document.getElementById('item5').scrollIntoView({block: 'start', behavior: 'smooth'})
        //     break;
        //   case 7:
        //     break;
        //
        // }

      }
    },
    mounted() {
      this.$nextTick(()=> {
        //轮播图特效
        this.$ami('.active-item0', 300, 'left', '0%', 0.2, true);
        this.$ami('.active-item1', 0, 'left', '0%', 0.2, true);
        this.$ami('.active-item2', 100, 'left', '0%', 0.2, true);
        this.$ami('.active-item3', 200, 'left', '0%', 0.2, true);
        this.$ami('.active-item4', 300, 'left', '0%', 0.2, true);
        this.$ami('.active-item5', 400, 'left', '0%', 0.2, true);
        this.$ami('.active-item6', 500, 'left', '0%', 0.2, true);
        this.$ami('.active-item7', 600, 'left', '0%', 0.2, true);
        this.$ami('.active-item8', 700, 'left', '0%', 0.2, true);
        this.$ami('.active-item9', 800, 'left', '0%', 0.2, true);

        this.$ami('.active-item10:nth-child(1)', 100, 'top', '50%', 0.2, true);
        this.$ami('.active-item10:nth-child(2)', 100, 'bottom', '50%', 0.2, true);
        this.$ami('.active-item10:nth-child(3)', 100, 'top', '50%', 0.2, true);
        this.$ami('.active-item10:nth-child(4)', 100, 'bottom', '50%', 0.2, true);
        this.$ami('.active-item10:nth-child(5)', 100, 'top', '50%', 0.2, true);
        this.$ami('.active-item11', 100, 'top', '50%', 0.2, true);
      })
    }
  }
</script>

<style scoped lang="less">
  .mini-program {
    width: 100%;
    min-width: 1300px;;

    .center {
      width: 1300px;
      margin: 0 auto;

      .business {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
        box-sizing: border-box;

        .title {
          width: 100%;
          font-size: 34px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          margin: 80px 0;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .left {
            display: flex;
            flex-direction: column;

            .left-title {
              font-size: 28px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              border-left: 4px solid #004BE5;
              padding-left: 15px;
              margin-bottom: 72px;
              text-align: left;
            }

            .left-item {
              display: flex;
              flex-direction: column;

              .line1 {
                font-size: 20px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                margin-bottom: 23px;
                text-align: left;
              }

              .line2 {
                font-size: 16px;
                font-weight: 400;
                color: #9DA9C3;
                line-height: 26px;
                margin-bottom: 49px;
                text-align: left;
              }
            }

            .more {
              cursor: pointer;
              width: 164px;
              height: 62px;
              border: 2px solid rgba(0, 76, 229, 1);
              display: flex;
              justify-content: center;
              align-items: center;

              font-size: 16px;
              font-weight: 400;
              color: rgba(0, 75, 229, 1);
              line-height: 26px;

              img {
                width: 24px;
                height: 9px;
                margin-left: 10px;
              }
            }
          }

          .right {
            width: 542px;
            height: 542px;
            position: relative;
            margin-right: 70px;

            .item {
              cursor: pointer;
              position: absolute;
              width: 110px;
              height: 110px;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 3px 25px 0px rgba(101, 110, 158, 0.2);
              border-radius: 50%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .text {
                margin-top: 7px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
              }

              .visible {

              }

              .hidden {
                display: none;
              }
            }
            .selected{
              background: rgba(0, 76, 229, 1);
              box-shadow: 0px 3px 25px 0px rgba(101, 110, 158, 0.2);

              .text {
                color: #ffffff;
              }

              .visible {
                display: none;
              }

              .hidden {
                display: block;
              }
            }

            .item:hover {
              background: rgba(0, 76, 229, 1);
              box-shadow: 0px 3px 25px 0px rgba(101, 110, 158, 0.2);

              .text {
                color: #ffffff;
              }

              .visible {
                display: none;
              }

              .hidden {
                display: block;
              }
            }

            .item1 { //直播
              left: -30px;
              bottom: 95px;
            }

            .item2 { //教育
              left: 40px;
              top: 0px;
            }

            .item3 { //医疗
              left: -50px;
              top: 160px;
            }

            .item4 { //健身
              left: 110px;
              bottom: -40px;
            }

            .item5 { //团购
              left: 300px;
              bottom: -50px;
            }

            .item6 { //外卖
              right: -10px;
              bottom: 60px;
            }

            .item7 { //跑腿
              right: -60px;
              bottom: 230px;
            }

            .item8 { //交友
              right: 10px;
              top: 30px;
            }

            .item0 { //社交
              right: 200px;
              top: -60px;
            }
          }
        }
      }

      .progress {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 50px;
        .title {
          width: 100%;
          text-align: center;
          font-size: 34px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 80px;
        }

        .content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .left {
            img {
              width: 672px;
              height: 603px;
            }
          }

          .right {
            display: flex;
            flex-direction: column;

            .items::-webkit-scrollbar {
              display: none;
            }


            .items {
              -ms-scroll-chaining: chained;
              -ms-overflow-style: none;
              -ms-content-zooming: zoom;
              -ms-scroll-rails: none;
              -ms-content-zoom-limit-min: 100%;
              -ms-content-zoom-limit-max: 500%;
              -ms-scroll-snap-type: proximity;
              -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
              -ms-overflow-style: none;

              width: 435px;
              height: 603px;
              overflow: scroll;

              .item:first-child {
                .line1 {
                  padding-top: 0;
                }
              }

              .item {
                cursor: pointer;
                width: 100%;
                border-right: 5px solid #E5EBF7;
                padding-right: 20px;
                box-sizing: border-box;

                .line1 {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-end;
                  margin-bottom: 20px;
                  padding-top: 35px;

                  .text {
                    font-size: 24px;
                    font-weight: 500;
                    color: rgba(51, 51, 51, 1);
                    padding: 10px 0;
                  }

                  .num {
                    font-size: 36px;
                    font-weight: 400;
                    color: #333333;
                    margin-left: 19px;
                  }
                }

                .line2 {
                  font-size: 16px;
                  font-weight: 400;
                  color: rgba(157, 169, 195, 1);
                  line-height: 26px;
                  text-align: right;
                }
              }
              .item:hover{
                border-right: 5px solid #FF8337;
              }

              .selected {
                border-right: 5px solid #FF8337;

                .line1 {
                  .num {
                    color: #004CE5;
                  }
                }
              }
            }

            .pagination {
              width: 100%;
              display: flex;
              justify-content: flex-end;
              padding: 40px 0;

              .right {
                display: flex;
                flex-direction: row;

                img {
                  cursor: pointer;
                  width: 12px;
                  height: 22px;
                }

                img:first-child {
                  margin-right: 47px;
                }
              }
            }
          }
        }
      }
    }

    .delivery-standard {
      background-image: url("../assets/images/jfbz.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      min-width: 1300px;
      height: 778px;

      .deliver-center {
        width: 1300px;
        margin: 0 auto;

        .deliver-title {
          font-size: 34px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          width: 100%;
          text-align: center;
          padding: 80px 0;
        }

        .items {
          flex-direction: row;
          display: flex;
          justify-content: space-between;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            height: 256px;
            background: rgba(23, 40, 100, 0.7);
            justify-content: center;

            .circle {
              width: 94px;
              height: 94px;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 8px 20px 0px rgba(24, 94, 223, 0.15);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .text {
              margin-top: 39px;
              width: 100%;
              text-align: center;
              font-size: 24px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }

    .system-standard {
      position: relative;
      top: -70px;
      height: 600px;
      width: 100%;
      min-width: 1300px;
      background-image: url("../assets/images/sysback.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0 120%;

      .system-center {
        width: 1300px;
        margin: 0 auto;

        .title {
          font-size: 34px;
          text-align: center;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 80px;
        }

        .items {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .item:hover{
            box-shadow: 0px 3px 50px 0px rgba(105, 122, 156, 0.25);
          }
          .item {
            width: 269px;
            height: 392px;
            background-color: #ffffff;
            background-image: url("../assets/images/item.png");
            padding: 28px 20px;
            box-sizing: border-box;

            .item-title {
              font-size: 24px;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              margin-bottom: 64px;
            }

            .li:last-child {
              margin-bottom: 0;
            }

            .li {
              margin-bottom: 30px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;

              .text {
                font-size: 18px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                margin-left: 10px;
                line-height: 1.5;
              }
            }
          }
        }
      }
    }

    .technology-support {

      width: 1300px;
      margin: 0 auto;
      padding-bottom: 50px;

      .title {
        width: 100%;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        margin-bottom: 60px;
      }

      .items {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .item {
          width: 287px;
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;

          .item-img {
            width: 287px;
            height: 201px;
          }

          .item-title {
            width: 100%;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            margin: 30px 0;
          }
        }
      }
    }
  }
</style>















