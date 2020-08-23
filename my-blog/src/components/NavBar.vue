<template>
    <div class="navbar">
        <button> <router-link to="/"> Home </router-link></button>
        <button> Categoriën </button>
        <button> <router-link to="/aboutme"> Over mij </router-link></button>
        <button> Contact </button>
    </div>
</template>

<script>
export default {
    
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
</style>