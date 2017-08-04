<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="product-block block">
        <h2 class="block-title">全部产品</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="news-block block">
        <h2 class="block-title">最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        invTime: 2000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/forecast'
          }
        ],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
        newsList: [
          {
            title: '挑担子、一盘棋、迎大考 解码习近平的强军策',
            url: 'http://news.cctv.com/2017/08/04/ARTIqtQuvnjffy8POIO5ipzV170804.shtml'
          },
          {
            title: '人民日报：开辟中国特色社会主义发展新境界',
            url: 'http://opinion.people.com.cn/n1/2017/0804/c1003-29448555.html'
          },
          {
            title: '固金砖之厦 拓合作之门——金砖合作的福建故事',
            url: 'https://news.xmnn.cn/xmxw/201708/t20170804_23340.htm'
          },
          {
            title: '庆祝建军90周年 手绘习近平“八一”难忘瞬间',
            url: 'http://xuexi.cctv.com/2017/08/04/ARTIMUpp4T6Tw6uuoBSriE2z170804.shtml'
          }
        ],
        productList: {
          pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }

  .index-right {
    float: left;
    width: 900px;
  }

  .block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }

  .product-block .hr {
    margin-bottom: 20px;
  }

  .block-title {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .product-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .block ul {
    padding: 10px 15px;
  }

  .block li {
    padding: 5px;
  }

  .news-block ul {
    padding-top: 0;
  }

  .news-block li {
    padding: 5px 0px;
    height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }

  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }

  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }

  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .line-last {
    margin-right: 0;
  }

  .index-board-button {
    margin-top: 20px;
  }


  .hot-tag {
    background: red;
    color: #fff;
  }



</style>
