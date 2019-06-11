const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
const home1 = {template: '<div>home1</div>'}
const aaa = {template: '<div>aaa</div>'}
var notFound = {
    template: '<h2>该页面找不到了。。。 /ps 这个支持模糊匹配</h2>'
};


const routers = [
    {
        path: '/login',
        meta: {
            title: 'login'
        },
        component: (resolve) => require(['./views/loginForm.vue'], resolve)
    },
    {
        path: '/',
        meta: {
            title: 'login'
        },
        component: (resolve) => require(['./views/layout.vue'], resolve),
        children: [
            {
                path: "/bar",
                component: Bar
            },
            {
                path: '/test',
                meta: {
                    title: ''
                },
                component: (resolve) => require(['./views/test.vue'], resolve)
            },
            {
                path: "/foo",
                component: Foo
            }
        ]
    },
    {
        path: '*',
        component: notFound
    }
];
export default routers;
