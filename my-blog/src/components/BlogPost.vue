<template>
    <div id="blog-posts">
        <li v-for="post in posts" v-bind:key="post">
            <div id="category-label">
                <p id="category"> {{post.category}} </p>
            </div>
            <div class="img-cont">
                <img :src= "post.img" style = "width:100%" alt="loading...">
            </div>
            <h1> {{post.title}} </h1>
            <p> {{post.text}} </p>
            <p> {{post.date}} </p>
            <br>
            
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
                category: 'Boeken',
                img: require("@/assets/Bloem.jpg"),
                },
            {   title: 'Blog post 2',
                text: 'Hiet staat de tekst van de tweede blogpost',
                date: '1 juli 2019',
                category: 'Hardlopen',
                img: require("@/assets/ZeilfotometRuben.jpg"),
                }]
    
        }
    }
}
</script>

<style scoped>
#category-label {
    font-family: 'Open Sans';
    font-size: 12px;
    color: gray;
    border: none;
    border-top: 8px double #8c8b8b;
    border-width: thick;
	text-align: center;
}

#category{
    background-color: white;
    display: inline-block;
    position: relative;
    top: -12px;
    padding: 0 10px;
    text-decoration: none;
    color: #8c8b8b;
    font-size: 14px;
}
</style>