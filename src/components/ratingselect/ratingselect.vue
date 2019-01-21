<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active': sType===2}">{{desc.all}}</span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':sType===0}">{{desc.positive}}</span>
      <span @click="select(1,$event)" class="block negative" :class="{'active':sType===1}">{{desc.negative}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 // const POSITIVE = 0;
 // const NEGATIVE = 1;
  
const ALL = 2;

export default {
  props: {
    ratings: {
      type: Array,
      default() {
        return [];
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: { // 只查看有内容的评价还是所有评价
      type: Boolean,
      default: false // 设置为可以查看所有评价
    },
    desc: {
      type: Object,
      default() {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        };
      }
    }
  },
  data() {
    return {
      sType: this.selectType,
      oContent: this.onlyContent
    };
  },
  methods: {
    select(type, event) {
      if (!event._constructed) {
        return;
      }
      this.sType = type;         
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ratingselect
  .rating-type
    padding 18px 0
    margin 0 18px
    border-1px(rgba(7, 17, 27, 0.1))
    font-size 0
    .block
      display inline-block
      padding 8px 12px
      margin-right 8px
      line-height 16px
      border-radius 1px 
      font-size 12px
      color rgb(77, 85, 93)
      &.active
        color #ffffff
      .count
        margin-left 2px
        font-size 8px
      &.positive
        background rgba(0, 160, 220, 0.2)
        &.active
          background rgb(0, 160, 220)
      &.negative
        background rgba(77, 85, 93, 0.2)
        &.active
          background rgb(77, 85, 93)
</style>