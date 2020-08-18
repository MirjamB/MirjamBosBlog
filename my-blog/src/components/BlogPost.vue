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
            <p class="date"> {{post.date}} </p>
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
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo nec nisi vulputate hendrerit malesuada ut diam. Proin quis lorem sit amet mauris sodales tristique. Integer vulputate, turpis eget aliquet ullamcorper, turpis leo venenatis lectus, non luctus ex mi sit amet felis. ',
                text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo nec nisi vulputate hendrerit malesuada ut diam. Proin quis lorem sit amet mauris sodales tristique. Integer vulputate, turpis eget aliquet ullamcorper, turpis leo venenatis lectus, non luctus ex mi sit amet felis. Pellentesque ex magna, auctor non laoreet sit amet, rutrum quis sapien. Nullam metus quam, bibendum ut lorem id, posuere maximus felis. Fusce mollis tortor quis facilisis cursus. Etiam rhoncus dignissim justo sit amet condimentum. Sed augue nisi, laoreet eu mollis at, fringilla ac est. <br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque mi erat, accumsan sodales sapien a, varius eleifend elit. Phasellus et neque sed erat eleifend fermentum. Morbi ut mauris vel augue hendrerit bibendum eget a elit. Morbi dignissim tortor id mauris consectetur, vel eleifend turpis congue. Mauris iaculis, felis at sagittis blandit, arcu dolor blandit ipsum, et vulputate lorem augue sed nibh. Suspendisse nec vulputate lectus, quis placerat turpis. Suspendisse pellentesque ultricies nunc, vel cursus orci gravida vel. Nam vel arcu fermentum ipsum tempus venenatis. Ut eu euismod nisi, a suscipit justo. Mauris consectetur libero et imperdiet tempor. Integer aliquam aliquam sem, ac fermentum orci pulvinar aliquet. Mauris iaculis commodo massa tincidunt convallis. Nulla ultrices, lacus mollis varius suscipit, risus libero hendrerit nisi, a dictum nulla tortor vitae tortor. In vestibulum risus eros, id posuere ante tincidunt ut. Nulla egestas egestas risus, eget pulvinar massa dapibus at.<br> Quisque lobortis maximus augue ut gravida. Nullam lobortis, erat et mollis rutrum, magna odio mollis sapien, ac dictum diam libero ut odio. Aliquam pretium nunc ac interdum euismod. Quisque mollis massa eu eros luctus, a molestie purus efficitur. Donec consequat metus est, quis aliquet diam pretium vel. Nunc porta sit amet massa at vulputate. Fusce elit diam, posuere et ligula eu, vulputate euismod urna. Vestibulum dapibus consequat augue, quis porta elit vehicula cursus. Pellentesque a pellentesque mi, interdum pretium augue. Aenean scelerisque sem ac est efficitur iaculis. Sed justo est, luctus quis turpis euismod, malesuada posuere lectus. Vestibulum eros sem, ultricies sed semper at, sodales eget nisl. Ut porttitor felis diam, a rutrum dolor fermentum non. Etiam ullamcorper sapien eros, ut sodales tortor tempor accumsan. Etiam finibus varius nibh, in maximus sem tincidunt quis. Proin viverra aliquet metus a pretium. ',
                date: '18 aug 2020',
                category: 'Boeken',
                img: require("@/assets/Bloem.jpg"),
                },
            {   title: 'Blog post 2',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo nec nisi vulputate hendrerit malesuada ut diam. Proin quis lorem sit amet mauris sodales tristique. Integer vulputate, turpis eget aliquet ullamcorper, turpis leo venenatis lectus, non luctus ex mi sit amet felis.',
                text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo nec nisi vulputate hendrerit malesuada ut diam. Proin quis lorem sit amet mauris sodales tristique. Integer vulputate, turpis eget aliquet ullamcorper, turpis leo venenatis lectus, non luctus ex mi sit amet felis. Pellentesque ex magna, auctor non laoreet sit amet, rutrum quis sapien. Nullam metus quam, bibendum ut lorem id, posuere maximus felis. Fusce mollis tortor quis facilisis cursus. Etiam rhoncus dignissim justo sit amet condimentum. Sed augue nisi, laoreet eu mollis at, fringilla ac est. <br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque mi erat, accumsan sodales sapien a, varius eleifend elit. Phasellus et neque sed erat eleifend fermentum. Morbi ut mauris vel augue hendrerit bibendum eget a elit. Morbi dignissim tortor id mauris consectetur, vel eleifend turpis congue. Mauris iaculis, felis at sagittis blandit, arcu dolor blandit ipsum, et vulputate lorem augue sed nibh. Suspendisse nec vulputate lectus, quis placerat turpis. Suspendisse pellentesque ultricies nunc, vel cursus orci gravida vel. Nam vel arcu fermentum ipsum tempus venenatis. Ut eu euismod nisi, a suscipit justo. Mauris consectetur libero et imperdiet tempor. Integer aliquam aliquam sem, ac fermentum orci pulvinar aliquet. Mauris iaculis commodo massa tincidunt convallis. Nulla ultrices, lacus mollis varius suscipit, risus libero hendrerit nisi, a dictum nulla tortor vitae tortor. In vestibulum risus eros, id posuere ante tincidunt ut. Nulla egestas egestas risus, eget pulvinar massa dapibus at.<br> Quisque lobortis maximus augue ut gravida. Nullam lobortis, erat et mollis rutrum, magna odio mollis sapien, ac dictum diam libero ut odio. Aliquam pretium nunc ac interdum euismod. Quisque mollis massa eu eros luctus, a molestie purus efficitur. Donec consequat metus est, quis aliquet diam pretium vel. Nunc porta sit amet massa at vulputate. Fusce elit diam, posuere et ligula eu, vulputate euismod urna. Vestibulum dapibus consequat augue, quis porta elit vehicula cursus. Pellentesque a pellentesque mi, interdum pretium augue. Aenean scelerisque sem ac est efficitur iaculis. Sed justo est, luctus quis turpis euismod, malesuada posuere lectus. Vestibulum eros sem, ultricies sed semper at, sodales eget nisl. Ut porttitor felis diam, a rutrum dolor fermentum non. Etiam ullamcorper sapien eros, ut sodales tortor tempor accumsan. Etiam finibus varius nibh, in maximus sem tincidunt quis. Proin viverra aliquet metus a pretium. ',
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

.date{
    color: gray;
    font-size: 12px;
}
</style>