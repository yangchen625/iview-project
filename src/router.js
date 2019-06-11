const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
const home1 = {template: '<div>home1</div>'}
const aaa = {template: '<div>aaa</div>'}
var notFound = {
    template:'<h2>该页面找不到了。。。 /ps 这个支持模糊匹配</h2>'
};




const routers = [
    {
        path: '/home',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/test.vue'], resolve)
    },
    {
        path: '/test',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/test.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: 'login'
        },
        component: (resolve) => require(['./views/loginForm.vue'], resolve)
    },

    {
        path: '/foo',
        component: Foo,
        children: [
            {
                path: '/bar',
                components: Bar,
                // a meta field
            }
        ]
    },


    {path: '/bar', component: Bar},
    {path: '/home1', component: home1},

    {
        path:'*',
        component:notFound
    }


];
export default routers;
