/** create by yangchen  2019/6/7 22:49
* @description：
*/
<template>
    <div id="app">
        <h1>Named Views</h1>
        <ul>
            <li>
                <router-link to="/goods/title">标题</router-link>
            </li>
            <li>
                <router-link to="/goods/img">图片</router-link>
            </li>
        </ul>

        <router-view></router-view>
        <router-view name="title" class="left"></router-view>
        <router-view name="image" class="right"></router-view>
    </div>
</template>

<script>
    export default {
        name: "goods",
        data() {
            return {msg: ''}
        },
        watch: {
            'msg': function (val, oldVal) {
                if (val !== oldVal) {
                    console.log(val)
                }
            }
        },
        methods: {
            componentStart() {
                console.log(" hello mounted ")
            }
        },
        mounted() {
            this.componentStart()
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .left,.right{
        float: left;
        width:48%;
        text-align: center;
        border:1px solid red
    }
</style>
