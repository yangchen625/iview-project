/** create by yangchen  2019/6/7 23:39
* @description：
*/
<template>
    <div>
        title
    </div>
</template>

<script>
    export default {
        name: "title",
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
                console.log(" title mounted ")
            }
        },
        mounted() {
            this.componentStart()
        }
    }
</script>

<style scoped>

</style>
