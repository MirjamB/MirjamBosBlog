<template>
    <div class = "single-blog">
        <div class="row">
            <div class="main">
                <blog-post v-bind:short = "false" v-bind:id="id"></blog-post>
            </div>
            <div class = "side">
                <over-mij></over-mij>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from './BlogPost.vue'
import OverMij from './OverMijShort'

export default {
    components: {
        'blog-post': BlogPost,
        'over-mij': OverMij,
    },
    data() {
        return {
            id: this.$route.params.id,
        }
    },

  
}
</script>

<style>
.single-blog{
    display: flex;
    justify-content: center;

}
</style>
