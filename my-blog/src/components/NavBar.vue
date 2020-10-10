<template>
    <div class="navbar">
        <button> <router-link to="/"> Home </router-link></button>
        <button> <router-link to="/aboutme"> Over mij </router-link></button>
        <dropdown>
            <button class="toggle" v-on:click = "showOptions">
                Categorieën
            </button>
            <div v-if="visible" class = "menu">
                    <button class="dropdown-item" v-on:click = "showOptions"> <router-link to="/blogs/Alles"> Alles </router-link> </button>
                    <button class="dropdown-item" v-on:click = "showOptions"> <router-link to="/blogs/Hardlopen"> Hardlopen </router-link> </button>
                    <button class="dropdown-item" v-on:click = "showOptions"> <router-link to="/blogs/Boeken"> Boeken </router-link> </button>                 
            </div>
        </dropdown>
        <button> Contact </button>
        
    </div>
</template>

<script>
import DropdownMenu from '@innologica/vue-dropdown-menu'

export default {
    data(){
        return {
            visible: false
        }
    },
    components: {
        'dropdown': DropdownMenu
    },
    methods: {
        showOptions: function(){
            this.visible = !this.visible;
        }
    }
}

</script>
<style scoped>
.navbar{
    display:flex;
    justify-content: center;
}

.navbar button{
    color:black;
    text-decoration: none;
    font-size: 14px;
    font-weight: 100;
    padding: 14px 20px;
    text-align: center;
    border: none;
    background-color: white;
}

.navbar button:hover{
    background-color: #EAEEEA;
}

.navbar button a{
    text-decoration: none;
    color: black;
}

.menu {
    position: absolute;
    background-color: #EAEEEA;
    display:flex;
    flex-direction:column;
    width: 115px;
    z-index: 1;
}

</style>