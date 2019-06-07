/** create by yangchen  2019/6/7 23:38
* @description：
*/
<template>
    <div> img</div>
</template>

<script>
    export default {
        name: "img",
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
                console.log(" img mounted ")
            }
        },
        mounted() {
            this.componentStart()
        }
    }
</script>

<style scoped>

</style>
