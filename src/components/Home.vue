
<template>
    <HeaderPage />
<h1>Hello, Welcome on Home page</h1>

</template>
<script>
import HeaderPage from './Header.vue'
export default {
    name: 'HomePage',
    components:{
        HeaderPage
    },
    // This is to mount to the page if user is already signup then stop go to signup page by checking to the data of user in local storage
    mounted() 
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name: 'SignUp'})
        }
    }
};
</script>