const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routers = [
    // {
    //     path: '/',
    //     meta: {
    //         title: ''
    //     },
    //     component: (resolve) => require(['./views/index.vue'], resolve)
    // },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }


];
export default routers;
