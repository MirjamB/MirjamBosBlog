<template>
    <div id= "OverMij">
        <div class="photogrid">
            <div class="rowOM">
                <div class="columnOM">
                    <img src="@/assets/OverMij/ZeilfotometRuben.jpg" style="width:100%">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                    <img src="@/assets/OverMij/VoorbeeldLiggend.jpeg" style="width:100%">
                </div>

                <div class="columnOM">
                    <img src="@/assets/OverMij/Bloem.jpg" style="width:100%">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                    <img src="@/assets/OverMij/HeaderFrontPage.jpg" style="width:100%">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                </div>

                <div class="columnOM">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                    <img src="@/assets/OverMij/VoorbeeldLiggend.jpeg" style="width:100%">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                    <img src="@/assets/OverMij/VoorbeeldLiggend.jpeg" style="width:100%">
                </div>

                <div class="columnOM">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                    <img src="@/assets/OverMij/VoorbeeldLiggend.jpeg" style="width:100%">
                    <img src="@/assets/OverMij/HeaderFrontPage.jpg" style="width:100%">
                    <img src="@/assets/OverMij/ProfielFoto.jpg" style="width:100%">
                </div>
            </div>
        </div>
        <div id="flexbox-OverMij">
        <div id= "OverMijText">
            <h1> Wie ik ben, wat ik doe </h1>
            <p> 
            <br><br> Quisque eu enim nisi. Nunc sed mi blandit, efficitur tortor a, molestie urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam condimentum neque eu nulla suscipit malesuada. Integer condimentum faucibus nulla nec vehicula. Pellentesque luctus iaculis dui vitae dapibus. Praesent tempor placerat sapien. Integer lacinia tortor sed magna fermentum, in eleifend est luctus. Etiam iaculis a sem eu maximus. Praesent pharetra laoreet ante sit amet malesuada. Duis ultrices vitae magna at aliquet. Quisque ultricies enim maximus, convallis libero pharetra, euismod libero. Suspendisse commodo ex et libero ultrices bibendum.
            <br> <br> Donec non feugiat eros. Donec et malesuada nulla. Aenean ut congue felis. Sed vel urna porta, pellentesque nisi nec, sollicitudin felis. Suspendisse tempus ligula ut porttitor venenatis. Vestibulum vulputate nisl faucibus tellus venenatis feugiat. Aliquam vehicula ligula eget tristique elementum. Quisque porta placerat sollicitudin. Quisque ac orci eu erat malesuada pellentesque eu vehicula leo.
            <br><br> Nulla condimentum risus vel iaculis cursus. Phasellus nisi nisl, auctor eu mauris ut, posuere suscipit ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu aliquet orci, id mollis mi. Suspendisse potenti. Morbi volutpat sit amet nisl cursus mollis. Nam vitae volutpat justo. Nullam sollicitudin ligula a odio consequat, a cursus purus laoreet. Fusce sed iaculis diam, non tincidunt nibh. Nulla vehicula, leo tristique faucibus sodales, purus nulla egestas orci, ac egestas orci felis ac mi.
            </p>
        </div>
        </div>
    </div>
</template>

<style>
.photogrid {
    display: flex;
    justify-content: center;
}

.rowOM {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

.columnOM {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.columnOM img {
    margin-top: 8px;
    vertical-align: middle;
}

#flexbox-OverMij {
    display: flex;
    justify-content: center;
}
#OverMijText {
    max-width: 992px;
    padding: 20px;
}



/* Adjustments for small screens */
@media screen and (max-width: 500px) {
    .columnOM {
        flex: 100%;
        max-width: 100%;
    }
}
@media screen and (max-width: 800px){
    .columnOM{
        flex: 50%;
        max-width: 50%;
    }
}
 /* Adjustements for wide screens */
@media screen and (min-width: 992px) {
    .columnOM{
        max-width:248px;
    }
}
</style>