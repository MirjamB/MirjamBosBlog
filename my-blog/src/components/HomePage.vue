<template>
    <div id="home">
        <div class = "row">
          <div class = "main">
            <blog-posts short="true"></blog-posts>
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
  name: 'Home',
  components: {
    'blog-posts': BlogPost,
    'over-mij': OverMij,
  },
}
</script>

<style>
#home {
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}

.main{
    flex: 70%;
    background-color: white;
    padding: 20px;
}

.side{
    flex: 30%;
    background-color: white;
    padding: 20px;
}

/* Adjustmentsfor small screens */
@media screen and (max-width: 500px) {
    .row {
        flex-direction: column;
    }

}

 /* Adjustments for wide screens */
@media screen and (min-width: 992px) {
    .row {
        max-width: 992px;
    }
}
</style>