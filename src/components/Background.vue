<template>
  <div class="background-page " ref="hhh"
       :class="typeIndex==0?'class0':typeIndex==1?'class1':typeIndex==2?'class2':typeIndex==3?'class3':typeIndex==4?'class4':typeIndex==5?'class5':''">
    <div class="center">
      <div class="left">
        <h2 class="text">
          {{typeIndex==0?"系统集成":typeIndex==1?"政务云":typeIndex==2?"网站建设":typeIndex==3?"小程序定制开发":typeIndex==4?"App定制化开发":typeIndex==5?"物联网":""}}</h2>
        <div class="border"></div>
      </div>
      <div class="right"></div>
      <div class="scroller" @click="scrollTo"></div>
    </div>
    <div id="toHere"></div>
  </div>
</template>

<script>
  export default {
    name: "Background",
    props: {
      typeIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        backImg00: require('../assets/images/xtjc.png'),
      }
    },
    methods: {
      scrollTo() {
        document.getElementById('toHere').scrollIntoView({block: 'start', behavior: 'smooth'})
      }
    }
  }
</script>

<style scoped lang="less">
  .class0 {
    background-image: url("../assets/images/xtjc.png");

    .center {
      .right {
        width: 838px;
        height: 580px;
        background-image: url("../assets/images/xtjc2.png");
      }
    }
  }

  .class1 {
    background-image: url("../assets/images/zwy.png");

    .center {
      .right {
        margin-top: 250px;
        width: 706px;
        height: 679px;
        background-image: url("../assets/images/zwy2.png");
      }
    }
  }

  .class2 {
    background-image: url("../assets/images/webb.png");

    .center {
      .right {
        margin-top: 193px;
        width: 805px;
        height: 537px;
        background-image: url("../assets/images/webb2.png");
      }
    }
  }

  .class3 {
    background-image: url("../assets/images/mini1.png");

    .center {
      .right {
        width: 593px;
        height: 462px;
        background-image: url("../assets/images/mini2.png");
      }
    }
  }

  .class4 {
    background-image: url("../assets/images/appback.png");

    .center {
      .right {
        width: 853px;
        height: 496px;
        background-image: url("../assets/images/appback2.png");
      }
    }
  }

  .class5 {
    background-image: url("../assets/images/wlw0.png");

    .center {
      position: relative;

      .left {
        flex-shrink: 0;
      }

      .right {
        width: 1131px;
        height: 756px;

      }
    }
  }

  .background-page {
    width: 100%;
    min-width: 1300px;
    height: 780px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .center {
      width: 1300px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;

      .left {
        display: flex;
        flex-direction: column;

        .text {
          font-size: 60px;
          font-weight: 800;
          color: rgba(255, 255, 255, 1);
        }

        .border {
          width: 126px;
          height: 14px;
          background: rgba(255, 255, 255, 1);
          margin-top: 60px;
        }
      }

      .right {
        z-index: 1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .scroller {
        z-index: 10;
        cursor: pointer;
        width: 46px;
        height: 46px;
        background: rgba(0, 76, 229, 1);
        background-image: url("../assets/images/scroll.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 26px 15px;
        position: absolute;
        left: 0;
        bottom: -25px;
      }
    }
  }

</style>
