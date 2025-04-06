<template>
    <img class="logo" src="../assets/Restlogo.jpg" alt="logo" />
    <div>
        <h3>Login</h3>
        <div class="login">
             <input type="text" v-model="email" placeholder="Enter email"  />
             <input type="password" v-model="password" placeholder="Enter Password"  />
            <button v-on:click="login">Login</button>
            <p>
            <router-link to="/sign-up">Sign up</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "loginPage",
    data() {
        return{
            email:'',
            password:''
        }
    },
    methods: {
        async login(){
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            console.warn(result)
            // calling api to get the user and pass
            //http://localhost:3000/user?email=fdfd
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name: "Home"});
            }
        }
    }
}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 100px;
}
.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.login button {
    width: 325px;
    height: 40px;
    border: 1px solid yellow;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>