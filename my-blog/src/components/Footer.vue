<template>
    <div id="blog-footer">
        <span id="copyright" v-bind:style = "footerStyle"> &#169; 2020 Mirjam Bos </span>
    </div>
</template>

<script>
export default {
    data() {
        return{
            footerStyle: {
                background: '#A8C3D6',
            }
        }
    },

    watch: {
        $route: function(){
            this.loadFooter();
        }
    },

    methods: {
        loadFooter: function(){
            if(this.$route.path == "/"){
                this.footerStyle.background = '#A8C3D6'
            }  else if (this.$route.path == "/aboutme"){
                this.footerStyle.background = '#ED7250'
            } else {
                this.footerStyle.background = '#A8C3D6'
            }
        }
    },

    mounted: function(){
        this.loadFooter();
    }
}
</script>

<style>
#blog-footer {
    padding-top: 10px;
    height: 30px;
}

#copyright {
    display: block;
    text-align: center;
}


</style>