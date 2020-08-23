import overMij from './components/OverMij.vue';
import homePage from './components/HomePage.vue';
import singleBlog from './components/SingleBlog.vue';

export default [
    { path: '/', component: homePage},
    { path: '/aboutme', component: overMij },
    { path: '/blog/:id', component: singleBlog},
]