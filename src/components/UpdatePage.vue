<template>
    <Header />
<h1>Hello Users, Welcome on Update Restaurant Page</h1>
    
</template>

<script>
    
    import Header  from './Header.vue';
    export default {
        name:'UpdatePage',
        components: {
            Header
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(!user) {
                this.$router.push({name: 'SignUp'});
            }
        }
    }
</script>