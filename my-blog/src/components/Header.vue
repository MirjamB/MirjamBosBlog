<template>
    <div id="blog-header" v-bind:style = "headerImg" >
        <span id="title" v-bind:style = "headerStyle"> {{ title }} </span>
        <span id="subtitle"> {{ subtitle }}</span>
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
               background: 'red', 
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
            if(this.$route.path == "/"){
                this.title = 'Mirjam Bos',
                this.subtitle = 'De blog over hardlopen, lekker eten, geloof en meer van mij!',
                this.headerStyle.background = 'blue',
                this.imgSrc = require('@/assets/HeaderFrontPage.jpg')

            } else if (this.$route.path == "/aboutme"){
                this.title = 'Over mij',
                this.subtitle = ''

                
            } else {
                this.title = '404 Page not found'
            }
        }
    },

    mounted: function(){
        this.loadHeader();
    }
    //computed: {
    //    title: function(){
      //      if (this.$route.path == "/aboutme"){
        //        return 'Over Mij'
          //  } else if (this.$route.path == "/") {
            //    return 'Mirjam Bos'
           // } else {
             //   return 'Deze pagina bestaat niet'
           // }
       // }
    //}
    // Dit kan nog efficienter met watch. Dan kijk je naar this.route.path en laat je een functie uitvoeren als die veranderd. Variabelen dan nog aanmaken in data
}

</script>




<style>
#blog-header {
    /*background-image: url("../assets/HeaderFrontPage.jpg");*/
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