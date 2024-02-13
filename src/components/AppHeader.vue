<template>
    <nav class="navbar navbar-light ms-2 mt-2">
        <form class="form-inline d-flex">
            <input 
            class="form-control mr-sm-2" 
            type="search" placeholder="Search" aria-label="Search"
            v-model="store.valueFilm"
            >
            <button 
            class="btn btn-outline-success my-2 my-sm-0" 
            type="submit"
            @click.prevent="$emit('searchFilm')"
            >
                Search
            </button>
        </form>
    </nav>
</template>

<script>
    import {store} from "../store"

    export default{
        name: "AppHeader",

        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>