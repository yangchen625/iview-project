const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const home1 = { template: '<div>home1</div>' }

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

    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/home1', component: home1 }



];
export default routers;
