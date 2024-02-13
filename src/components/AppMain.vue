<template>
    <AppFilms/>
</template>

<script>
    import AppFilms from '../components/AppFilms.vue'
    import {store} from "../store"
    import LangFlag from 'vue-lang-code-flags'

    export default{
        name: "AppMain",
        components:{
            AppFilms
        },           
        data(){
            return{store}
        }
    }
</script>

<style lang="scss" scoped>
</style>