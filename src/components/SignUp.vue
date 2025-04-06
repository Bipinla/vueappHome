<template>
    <img class="logo" src="../assets/Restlogo.jpg" alt="logo" />
    <div>
        <h3>Sign Up</h3>
        <div class="register">
             <input type="text" v-model="name" placeholder="Enter Name"  />
             <input type="text" v-model="email" placeholder="Enter Email"  />
             <input type="password" v-model="password" placeholder="Enter Password"  />
            <button v-on:click="signUp">SignUp</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
        console.warn("siginUp",this.name,this.email,this.password)
        let result = await axios.post("http://localhost:3000/user",{
            name: this.name,
            email: this.email,
            password: this.password});
            console.warn(result);

            if(result.status==201){
                //alert("Sign up done")
                localStorage.setItem("user-info",JSON.stringify(result.data))
                //redirect to the home page
                this.$router.push({name:"Home"})
            }
            
        }
    },
    //This is checking the user is already signup or not if signin already the mount to homepage directly
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 100px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 325px;
    height: 40px;
    border: 1px solid yellow;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>