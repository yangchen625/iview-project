<template>
    <div id="app">
        <div class="layout">
            <div class="layout-top">
                <div class="layout-logo">this is my logo</div>
            </div>
            <div class="layout-content">
                <Row>
                    <i-col span="5">
                        <i-menu active-name="1-1" width="auto" accordion :open-names="[menuData[0].name]"
                                @on-select="menuSelect" :style="{height:mainHeight+'px'}">
                            <Submenu v-for="item in menuData" :name="item.name" :key="item.id">
                                <template slot="title">
                                    <Icon type="ios-analytics"></Icon>
                                    {{item.label}}
                                </template>
                                <menu-item v-for="mi in item.menuitems" :name="mi.name" :key="mi.id">{{mi.label}}</menu-item>
                            </Submenu>
                        </i-menu>
                    </i-col>
                    <i-col span="19">
                        <div class="layout-content-main">
                            <Tabs type="card" @on-tab-remove="removeTab" @on-click="clickTab" :animated="false"
                                  :value="activeTab">
                                <template v-for="(item,index) in mainTabs">
                                    <tab-pane :label="item.label" closable :name="item.name" v-if="item.show">
                                        <iframe frameborder="0" width="100%" :height="frameHeight" marginheight="0"
                                                scrolling="auto" marginwidth="0" :src="item.url">我了个去
                                        </iframe>
                                    </tab-pane>
                                </template>
                            </Tabs>
                        </div>
                    </i-col>
                </Row>
            </div>
            <div class="layout-copy">
                2017-2018 &copy; http://wallimn.iteye.com
            </div>
        </div>
    </div>
</template>
<script>
    //import './libs/jquery-1.12.4.js'
    export default {
        data: function () {
            return {
                menuData: [
                    {
                        label: '菜单1', name: "m1",
                        menuitems: [
                            {name: 'm1-1', label: '菜单1-1', url: 'https://www.sina.com.cn/'},
                            {name: 'm1-2', label: '菜单1-2', url: 'grid.html'},
                            {name: 'm1-3', label: '菜单1-3', url: 'button.html'},
                            {name: 'm1-4', label: '菜单1-4', url: 'table.html'},
                        ]
                    },
                    {
                        label: '菜单2', name: "m2",
                        menuitems: [
                            {name: 'm2-1', label: '菜单2-1', url: 'http://wallimn.iteye.com'},
                            {name: 'm2-2', label: '菜单2-2', url: 'm2-1.html'},
                            {name: 'm2-3', label: '菜单2-3', url: 'm2-1.html'},
                            {name: 'm2-4', label: '菜单2-4', url: 'm2-1.html'},
                        ]
                    },
                    {
                        label: '菜单3', name: "m3",
                        menuitems: [
                            {name: 'm3-1', label: '菜单3-1', url: 'm3-1.html'},
                            {name: 'm3-2', label: '菜单3-2', url: 'm3-1.html'},
                            {name: 'm3-3', label: '菜单3-3', url: 'm3-1.html'},
                            {name: 'm3-4', label: '菜单3-4', url: 'm3-1.html'},
                        ]
                    },
                    {
                        label: '菜单4', name: "m4",
                        menuitems: [
                            {name: 'm4-1', label: '菜单4-1', url: 'm4-1.html'},
                            {name: 'm4-2', label: '菜单4-2', url: 'm4-1.html'},
                            {name: 'm4-3', label: '菜单4-3', url: 'm4-1.html'},
                            {name: 'm4-4', label: '菜单4-4', url: 'm4-1.html'},
                        ]
                    }
                ],
                activeTab: null,
                mainHeight: 0,
                frameHeight: 0,
                mainTabs: []
            };
        },
        mounted: function () {
            this.setFrameHeight();
        },
        methods: {
            clickTab: function (name) {
                var vm = this;
                vm.frameHeight -= 1;
                //解决chrome浏览器中tab切换滚动条消失的问题。
                window.setTimeout(function () {
                    vm.frameHeight = vm.frameHeight + 1;
                }, 100);
            },
            //根据名称来查找对应的菜单条目
            getMenuItem: function (name) {
                for (var sm = 0; sm < this.menuData.length; sm++) {
                    for (var mi = 0; mi < this.menuData[sm].menuitems.length; mi++) {
                        if (this.menuData[sm].menuitems[mi].name == name)
                            return this.menuData[sm].menuitems[mi];
                    }
                }
                return {};//这个应该不可能发生
            },
            //根据名称查找对应的Tab页。
            getTab: function (name) {
                for (var i = 0; i < this.mainTabs.length; i++) {
                    if (this.mainTabs[i].name == name)
                        return this.mainTabs[i];
                }
                return null;//没有找到
            },
            //设置Tab页不可见。
            removeTab: function (name) {
                var tab = this.getTab(name);
                if (tab != null) tab.show = false;
                console.log("mainTabRemove, name=", name, ", label=", tab.label, ", url=", tab.url);
            },
            setFrameHeight: function () {
                //调整掉一些补白的值
                this.mainHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - 90 - 90;
                this.frameHeight = this.mainHeight - 90;
            },
            //菜单点击
            menuSelect: function (name) {
                this.$Message.info(name);
                let tab = this.getTab(name);
                console.log('xxxxxxxxxx')
                console.log(this.mainTabs)
                if (tab == null) {
                    let mi = this.getMenuItem(name);
                    mi = Object.assign(mi, {show: true});
                    this.mainTabs.push(mi);
                }
                else {
                    tab.show = true;
                }
                this.activeTab = name;
            },
            onAuthor: function () {
                this.$Message.info("wallimn，http://wallimn.iteyey.com");
            }
        }
    }
</script>
<style type="text/css">
    body, html {
        background: #f5f7f9;
    }
    .layout {
    }
    .layout-logo {
        width: 100px;
        height: 40px;
        background: #bcbcbc;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-content {
        position: absolute;
        right: 0;
        left: 0;
        top: 90px;
        bottom: 90px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main {
        min-height: 400px;
        padding: 10px;
    }
    .layout-copy {
        text-align: center;
        padding: 5px 0 10px;
        color: #9ea7b4;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 90px;
    }
    .layout-top {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 90px;
    }
</style>
