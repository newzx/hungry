<template>
  <div id="app">
    <v-header :seller="seller" :errok="errok"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {urlParse} from './common/js/util.js';
import header from './components/header/header.vue';

const ERR_OK = 0;
export default {
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      },
      errok: 0
    };
  },
  created() {
    this.$http.get('/api/seller?id=' + this.seller.id).then(response => {
      response = response.body; // 返回一个对象
      if (response.errno === ERR_OK) {
        // this.seller = response.data;
        this.seller = Object.assign({}, this.seller, response.data);
        console.log(this.seller.id);
        // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
      }
    });
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang='stylus' rel="stylesheet/stylus">
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);

  .tab-item {
    flex: 1;
    text-align: center;

    & > a {
      display: block;
      font-size: 14px;
      color: agb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
