/** create by yangchen  2019/6/7 23:37
* @description：
*/
<template>
    <div> cart</div>
</template>

<script>
    export default {
        name: "cart",
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
                console.log(" cart mounted ")
            }
        },
        mounted() {
            this.componentStart()
        }
    }
</script>

<style scoped>

</style>
