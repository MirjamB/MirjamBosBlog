<template>
    <div id="OverMijShort">
        <img src="@/assets/ProfielFoto.jpg" style="width:100%; border-radius: 50%; max-width: 290px;">
        <h1 style="background-color: white; font-size:24; text-align: center;">Welkom</h1>
        <p>Heee, Mirjam hier! Wat leuk dat je een kijkje neemt op mijn website. 
            Je leest hier allerlei artikelen over dingen die ik leuk vindt.
             Uiteenlopend van mijn hardloopdoelen en trainingsplanning tot mijn nieuwste creatieve projecten en favoriete recepten.
             Verder kan je meer vinden over <router-link to="/aboutme"> wie ik ben </router-link> of stuur me een berichtje als je dat leuk vindt!</p>
    </div>    
</template>

<style scoped>
p a:hover{
    text-decoration: none;
    background-color: #EAEEEA;
}

p a:link, :visited, :active{
    text-decoration: none;
    color: black;
}
</style>

