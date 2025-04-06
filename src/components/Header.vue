<template>
    <div class="nav">
        <router-Link to="/">Home</router-Link>
        <router-Link to="/AddPage">Add Restarunt</router-Link>
        <router-Link to="UpdatePage">Update Restarunt</router-Link>
        <router-Link v-on:click="logout" href="#">LogOut</router-Link>
    </div>
    
</template>

<script>
    
    export default {
        name: 'HeaderPage',
        methods: {
            logout(){
                localStorage.clear()
                this.$router.push("Login")
            }
        }
    }
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 20px;
    margin: 4px;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
}
</style>