<template>
    <div id="blog-posts">
        <li v-for="post in posts" v-bind:key="post">
            <h1> {{post.title}} </h1>
            <p> {{post.text}} </p>
            <p> {{post.date}} </p>
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [{
                title: 'Mijn titel',
                text: 'dit is de tekst van mijn hbagghelkgjlkev',
                date: '18 aug 2020',
                },
            {   title: 'Blog post 2',
                text: 'Hiet staat de tekst van de tweede blogpost',
                date: '1 juli 2019',
                }]
    
        }
    }
}
</script>

<style scoped>

</style>