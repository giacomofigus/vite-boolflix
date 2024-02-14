<template>
    <h2 class="mt-4 ms-2">Film Trovati:</h2>
    <div id="cont" class="d-flex flex-wrap container-fluid ">
        <div
            id="singleCard" 
            v-for="(element, index) in store.arrayFilms"
            class="position-relative"
            >
                <!-- Immagine -->
                <div class="border">
                    <img :src="getImageUrl(element.poster_path)" class="w-100 ">
                </div>


                <div class=" d-flex flex-column justify-content-between p-1 ">
                    <!-- Titoli -->
                    <span class="fw-bold text-center">{{ element.original_title }}</span> 
                    <span class="text-center mb-1">{{ element.title }}</span>

                    <!-- Bandiera -->
                    <lang-flag id="langflag" :iso="element.original_language"/>
                    <!-- Punteggio -->
                    <span class="text-center">{{ element.vote_average }}</span>                
                </div>



        </div>

    </div>

    <h2 class="mt-5 ms-2">Serie Trovate:</h2>
    <div id="cont" class="d-flex flex-wrap container-fluid ">
        <div
        id="singleCard" 
        v-for="(element, index) in store.arraySeries"
        class="position-relative "
        >
            <!-- Immagine -->
            <img :src="getImageUrl(element.poster_path)" class="w-100 border">

            <div class=" d-flex flex-column justify-content-between p-1 ">
                <!-- Titolo -->
                <span class="fw-bold text-center">{{ element.original_name }}</span> 

                <!-- Bandiera -->
                <lang-flag id="langflag" :iso="element.original_language"/>
                <!-- Punteggio -->
                <span class="text-center">{{ element.vote_average }}</span>                
            </div>



        </div>

    </div>
</template>

<script>

    import {store} from "../store"
    import LangFlag from 'vue-lang-code-flags'

    export default{
        name: "AppMain",
        components:{
            LangFlag
        },           
        data(){
            return{store}
        },
        methods:{
            getImageUrl(posterPath){
                if(posterPath !== null){
                    const baseUrl = "https://image.tmdb.org/t/p/";
                    const size = "w500"; 
                    return posterPath ? `${baseUrl}${size}${posterPath}` : ''; 
                } else{
                    return "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    #cont{
        gap: 10px;

        #singleCard{
            flex-basis: calc(100% / 8 - 10px);
            background-color: black;

            img:hover{
                background-color: black;
                opacity: 0.5;
            }

            #langflag{
                width: 30px;
                margin: 0 auto;
            }

        }        
    }


</style>