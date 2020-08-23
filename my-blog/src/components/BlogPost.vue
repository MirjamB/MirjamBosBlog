<template>
    <div class="single-post">
         <div class ="category-label">
            <p class ="category"> {{post.category}} </p>
        </div>
        <div class="img-cont">
            <router-link :to="{path: '/blog/' + id}"> <img :src= "post.img" style = "width:100%" alt="loading..."> </router-link>
        </div>
        <h1> <router-link :to="{path: '/blog/' + id}"> {{post.title}} </router-link></h1>
        <p v-if= "short"> {{ post.summary }} </p>
        <p v-else> {{post.text}} </p>
        <br>
        <p class="date"> {{post.date}} </p>
        <br>
    </div>
</template>

<script>
import {posts} from '../posts'

export default {
    props: ['short', 'id'],
    computed: {
        post: function(){ 
            let self = this;
            return posts.filter(function(post){
                console.log(self.id)
                return post.id == self.id
            })[0]
        }
    }
}
</script>

<style>
.category-label {
    font-family: 'Open Sans';
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

h1 a:hover{
    text-decoration: none;
    background-color: #EAEEEA;
}

h1 a:link, :visited, :active{
    text-decoration: none;
    color: black;
}

.date{
    color: gray;
    font-size: 12px;
}
</style>