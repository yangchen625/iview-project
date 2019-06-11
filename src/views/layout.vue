<style scoped>
    .layout-logo {
        width: 100px;
        height: 30px;
        background: #f7b84f;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-con {
        height: 100%;
        width: 100%;
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"> this is my logo</div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate">
                        </Icon>
                        Item 1
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-3" theme="dark" width="auto" :open-names="['1']" v-for="item of menuData"
                      :key="item.id">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon :type=item.icon></Icon>
                            {{item.label}}
                        </template>
                        <div v-for="menuitem of item.menuitems">
                            <MenuItem :name="menuitem.name" >
                                <router-link :to="menuitem.url" tag="li" @click.native="handleclick(menuitem.label,item.label,menuitem.url,item.url)" >{{menuitem.label}}</router-link>
                            </MenuItem>
                        </div>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem to="/">主页</BreadcrumbItem>
                        <BreadcrumbItem :to="firstUrl">{{firstLabel}}</BreadcrumbItem>
                        <BreadcrumbItem :to="secondUrl">{{sencondLabel}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="height: 600px">
                            <router-view></router-view>
                        </div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        name: 'layout',
        data() {
            return {
                isCollapsed: false,
                sencondLabel:'菜单1-1',
                firstLabel:'菜单1',
                firstUrl:'/home1',
                secondUrl:'/bar',
                menuData: [
                    {
                        label: '菜单1', name: "m1",icon:"ios-navigate",url:"/home1",
                        menuitems: [
                            {name: 'm1-1', label: 'to_test', url: '/test'},
                            {name: 'm1-2', label: '菜单1-2', url: '/bar'},
                            {name: 'm1-3', label: '菜单1-3', url: '/foo'},
                            {name: 'm1-4', label: 'to_login', url: '/login'},
                        ]
                    },
                    {
                        label: '菜单2', name: "m2",icon:"ios-analytics",url:"/home1",
                        menuitems: [
                            {name: 'm2-1', label: '菜单2-1', url: '/test'},
                            {name: 'm2-2', label: '菜单2-2', url: '/bar'},
                            {name: 'm2-3', label: '菜单2-3', url: '/foo'},
                            {name: 'm2-4', label: '菜单2-4', url: '/'},
                        ]
                    },
                    {
                        label: '菜单3', name: "m3",icon:"ios-paper",url:"/home1",
                        menuitems: [
                            {name: 'm3-1', label: '菜单3-1', url: '/test'},
                            {name: 'm3-2', label: '菜单3-2', url: '/bar'},
                            {name: 'm3-3', label: '菜单3-3', url: '/foo'},
                            {name: 'm3-4', label: '菜单3-4', url: '/'},
                        ]
                    },
                    {
                        label: '菜单4', name: "m4",icon:"ios-navigate",url:"/home1",
                        menuitems: [
                            {name: 'm4-1', label: '菜单4-1', url: '/test'},
                            {name: 'm4-2', label: '菜单4-2', url: '/bar'},
                            {name: 'm4-3', label: '菜单4-3', url: '/foo'},
                            {name: 'm4-4', label: '菜单4-4', url: '/'},
                        ]
                    }
                ],
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods:{
            handleclick:function (label,firstLabel,secondUrl,firstUrl) {
                console.log(label,name,secondUrl,firstUrl)
                this.sencondLabel=label
                this.firstLabel=firstLabel
                this.firstUrl=firstUrl
                this.secondUrl=firstUrl
            }
        }
    }
</script>
