<template>
  <div class="row">
    <div class="col-7">
      <div v-for="post,index in posts">
        <h5 v-html="post.topic" class="font-weight-bold"></h5>
        <div class="text-muted">{{limit(filterHtml(post.body_html))}}</div>
        <div class="mt-2 mb-0">
          作者：{{post.author_name}}

          <router-link :to="postUrl(index)" class="d-inline-block mx-3">详情...</router-link>
          <p class="d-inline-block float-right">{{post.timestamp|fromNow}}</p>

        </div>

        <hr class="mt-1">
      </div>
    </div>
    <div class="col-5 ">
      <div class="figure pic text-center">
        <img :src="randomGirl.url" id="image" style="width: 100%;height:auto;" class="figure-img img-fluid rounded"
          alt="正在加载图片">
        <div style="position: absolute;right: 20px;top:6px;"><a onclick="location.reload()" href="#"><i
              class="fa fa-rotate-left" style="font-size:26px;color:ghostwhite"></i></a></div>
        <figcaption class="text-muted text-right ml-3" style="font-size: 16px;">{{randomGirl.desc}}</figcaption>
      </div>
      <ul class="list-unstyled p-4 mt-3">
        <li>
          <p>调用的博客地址：<a href="http://www.gaocode.top">个人博客</a></p>
        </li>
        <li>
          <p>图片调用的地址:<a href="https://gank.io/">干货集中营</a></p>
        </li>
        <li>
          <p>Github地址: <a href="https://github.com/gao-001">gao-001</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  var axios = require("axios");
  var moment = require('moment');
  moment.locale('zh-cn');

  export default {
    name: 'Post',
    data() {
      return {
        posts: [],
        page: Math.floor(Math.random() * 4 + 1),
        girls: {},
      }
    },
    computed: {
      randomGirl: function () {
        let r = Math.floor(Math.random() * 30)
        return this.girls[r]
      }
    },
    filters: {
      fromNow(time) {
        return moment(time).fromNow();
      }
    },




    mounted: function () {
      axios.get('/api/v1/posts').then(response => {
        this.posts = response.data.posts.reverse()
        this.$store.state.posts = this.posts
      });
      axios.get(`https://gank.io/api/v2/data/category/Girl/type/Girl/page/${this.page}/count/30`).then(response => {
        this.girls = response.data.data.reverse()
        console.log(this.girls)
      });

    },

    methods: {
      limit: function (s, num = 150) {
        return s.slice(0, num) + '...'
      },
      filterHtml: function (val) {
        return val.replace(/<[^>]*>/g, '')
      },
      postUrl: function (index) {
        return '/post/' + index
      },

    },

  }

</script>
<style>
  .my-text {
    position: relative;
    bottom: 0;
    right: 0;
  }
</style>