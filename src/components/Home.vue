
<template>
<h1>Hello, Welcome on Home page</h1>
</template>
<script>
export default {
    name: 'HomePage',
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