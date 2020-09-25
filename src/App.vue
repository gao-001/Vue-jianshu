<template>
  <div id="app">
    <nav class="navbar shadow-sm navbar-expand navbar-light bg-light justify-content-center fixed-top" style="margin-top: 0px;">
      <div class="container justify-content-between">
        <a class="navbar-brand" style="color: red;" href="/">简书</a>



        <form class="form-inline mr-3 action="http://www.baidu.com/baidu">
          <input class="form-control mr-2" placeholder="百度一下" name='word' type="text" autocomplete="off">
          <button class="btn btn-outline-success my-1" type="submit">搜索</button>
        </form>
      </div>
    </nav>


    <div class="container" style="margin-top: 80px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        posts: {},
      }
    },
    mounted() {
    },
    components: {
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    margin-top: 0px;
  }
</style>