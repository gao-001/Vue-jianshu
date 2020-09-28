<template>
    <div>


        <h3 class="font-weight-bold text-center">{{post.topic}}</h3>
        <p v-html="post.body_html" class="p-3">
        </p>

    </div>
</template>
<script>
    import Index from './Index.vue'

    var axios = require("axios");
    export default {
        name: 'Post',
        data() {
            return {
                post: this.$store.state.posts[this.$route.params.id],

            }
        },
        created() {
            //在页面加载时读取sessionStorage里的状态信息
            if (sessionStorage.getItem("store")) {
                this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
            }

            //在页面刷新时将vuex里的信息保存到sessionStorage里
            window.addEventListener("beforeunload", () => {
                sessionStorage.setItem("store", JSON.stringify(this.$store.state))
            })
        },
        mounted() {
            this.post = this.$store.state.posts[this.$route.params.id]
        },


    }
</script>

