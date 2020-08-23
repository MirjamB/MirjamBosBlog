import overMij from './components/OverMij.vue';
import homePage from './components/HomePage.vue';
import singleBlog from './components/SingleBlog.vue';
import categoryPage from './components/CategoryPage.vue';

export default [
    { path: '/', component: homePage},
    { path: '/aboutme', component: overMij },
    { path: '/blog/:id', component: singleBlog},
    { path: '/blogs/:category', component: categoryPage},
]