<template>
    <header class="d-flex justify-content-between align-items-center ">
        <nav class="d-flex align-items-center">
            <img src="../../public/netflix-logo-png-large.png" alt="" width="180">

            <ul class="d-flex align-items-center gap-5 poppins-light pt-2">
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Recently added</a></li>
                <li><a href="#">My List</a></li>
            </ul>
        </nav>

        <div 
        class="d-flex align-items-center  position-relative" 
        >   
            <input 
            type="text"
            class="text-white me-2 "
            v-model="store.valueFilm"
            id="searchBar"
            @keyup.enter="$emit('searchFilm')"
            >
            <i class="fa-solid fa-magnifying-glass text-white"  id="search" @click.prevent="$emit('searchFilm')" ></i>


        </div>
    </header>
</template>

<script>

    import {store} from "../store"

    export default{
        name: "AppHeader",
        data(){
            return{
                store
            }
        },
        methods:{
            expandSearch(){

            }
            
        }
    }
</script>

<style lang="scss" scoped>
    header{
        padding-inline: 30px;
        height: 80px;
        z-index: 100;
        background-color: black;
        position: sticky;
        top: 0;
        nav{
            ul{
                list-style-type: none;
                li{
                    a{
                        text-decoration: none;
                        color: white;
                        font-size: 18px;
                    }
                }
            }
        }

        div{
            input{
                padding: 8px;
                border: 1px solid white;
                position: fixed;
                right: 0;
                border-radius: 10px;
                width: 40px;
                transition: .5s;
                cursor: default;
            }

            i{
                font-size: 23px;
                position: fixed;
                right: 16px;
                transition: .2s;
            }

            .active{
                width: 200px;
                border-radius: 10px;
                cursor: auto;
                transition: .5s;
            }
        }
    }

    @media screen and (max-width: 768px){
        ul li{
            display: none;
        }
    }

</style>