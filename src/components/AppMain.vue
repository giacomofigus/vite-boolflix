<template>
    <h2 class="mt-4 ms-2">Film Cercati:</h2>
    <ul>
        
        <li v-for="(element, index) in store.arrayFilms">
            {{ element.original_title }}, {{ element.title }},
            <lang-flag 
            :iso="element.original_language"
            
            />
            {{ element.vote_average }}
        </li>
    </ul>
</template>

<script>
    import {store} from "../store"
    import LangFlag from 'vue-lang-code-flags';

    export default{
        name: "AppMain",
        components:{
            LangFlag
        },
        data(){
            return{store}
        }
    }
</script>

<style lang="scss" scoped>
</style>