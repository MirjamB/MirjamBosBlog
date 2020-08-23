<template>
    <div id="blog-header" v-bind:style = "headerImg" >
        <span id="title" v-bind:style = "headerStyle"> {{ title }} </span>
        <span id="subtitle" v-bind:style = "headerStyle"> {{ subtitle }}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
           title: '',
           subtitle: '',
           imgSrc: require('@/assets/HeaderFrontPage.jpg'),
           headerStyle: {
               background: '#A8C3D6', 
           },
           

        }
    },
    computed: {
        headerImg: function(){
               return { 
                   backgroundImage: 'url('+ this.imgSrc + ')',
                }
           }
    },
    watch: {
        $route: function(){
          this.loadHeader();
        }
    },

    methods: {
        loadHeader: function(){
            if(this.$route.path == "/aboutme"){
                this.title = 'Over mij',
                this.subtitle = ''
                this.headerStyle.background = '#ED7250',
                this.imgSrc = require('@/assets/HeaderOverMij.jpg')
            } else {
                this.title = 'Mirjam Bos',
                this.subtitle = 'De blog over sport, lekker eten, creativiteit en meer van mij!',
                this.headerStyle.background = '#A8C3D6',
                this.imgSrc = require('@/assets/HeaderFrontPage.jpg')
            }
        }
    },

    mounted: function(){
        this.loadHeader();
    }
}

</script>




<style>
#blog-header {
    text-align: center;
    padding-top: 75px;
    padding-bottom: 50px;
    height: 275px;
}

#title{
    color: black;
    font-size: 90px;  
    font-weight: 120;
    font-family: "Miss Fajardose";
    display: block;
}

#subtitle{
    color: black;
    font-family: 'Open Sans';
    text-align: center;
    font-size: 18px;
    padding: 10px 0px;
    font-weight: 100;
    display: block;
}

</style>