<template>
    <div id="blog-posts">
        <li v-for="post in bigPosts " v-bind:key="post">
            <div class ="category-label">
                <p class ="category"> {{post.category}} </p>
            </div>
            <div class="img-cont">
                <img :src= "post.img" style = "width:100%" alt="loading...">
            </div>
            <h1> {{post.title}} </h1>
            <p v-if='short'> {{ post.summary }} </p>
            <p v-else> {{post.text}} </p>
            <p class="date"> {{post.date}} </p>
            <br>
            
        </li>
    </div>
</template>

<script>
import {posts} from '../posts'

export default {
    props: ['short'],
    data() {
        return {
        }
    },
    computed: {
        blogPosts: function(){
            return posts
        },
        bigPosts: function(){
            return posts.slice(0,2)
        }
    }
}
</script>

<style>
.category-label {
    font-family: 'Open Sans';
    font-size: 12px;
    color: gray;
    border: none;
    border-top: 8px double #8c8b8b;
    border-width: thick;
	text-align: center;
}

.category{
    background-color: white;
    display: inline-block;
    position: relative;
    top: -12px;
    padding: 0 10px;
    text-decoration: none;
    color: #8c8b8b;
    font-size: 14px;
}

.date{
    color: gray;
    font-size: 12px;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>