<template>
    <main class="text-white">

        <div class="jumbocover px-4 py-5 d-flex flex-column ">
            <div class="bg-transparent py-5">
                <h2 class="poppins-bold">Lorem Ipsum</h2>
                <p class="poppins-regular mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla, libero quia, suscipit non harum tempora laborum sit aliquid officia velit rem iusto odio, repellendus id? Adipisci inventore accusantium reprehenderit.</p>
            </div>
        </div>

        <div id="mainContainer">
            <h2 
            class="mt-5 ms-2 poppins-bold"
            v-show="store.arrayFilms.length > 0"
            >
                Film Trovati:
            </h2>
            <div id="cont" class="d-flex flex-wrap container-fluid ">
                <div
                id="singleCard" 
                v-for="(element, index) in store.arrayFilms"
                >
                    <!-- Immagine -->
                    <div class=" position-relative ">
                        <img :src="getImageUrl(element.poster_path)" class="w-100 ">
    
                        <div id="Info" class="position-absolute top-0">
                            <!-- Titoli -->
                            <span class="fw-bold poppins-regular">{{ element.original_title }}</span> 
                            <span class="mb-1 d-block poppins-regular">{{ element.title }}</span>
        
                            <!-- Bandiera -->
                            <lang-flag id="langflag" :iso="element.original_language"/>
                            <!-- Punteggio -->
                            <span class="text-center poppins-regular">{{ element.vote_average }}</span>
                        </div>
                    </div>
                </div>
        
            </div>
        
            <h2 
            class="mt-5 ms-2 poppins-bold"
            v-show="store.arraySeries.length > 0"
            >
            Serie Trovate:
            </h2>
            <div id="cont" class="d-flex flex-wrap container-fluid ">
                <div
                id="singleCard" 
                v-for="(element, index) in store.arraySeries"
                class="position-relative "
                >   
                    <div class=" position-relative ">
                        <!-- Immagine -->
                        <img :src="getImageUrl(element.poster_path)" class="w-100 ">
        
                        <div id="Info" class="position-absolute top-0">
                            <!-- Titolo -->
                            <span class="fw-bold text-center">{{ element.original_name }}</span> 
        
                            <!-- Bandiera -->
                            <lang-flag id="langflag" :iso="element.original_language"/>
                            <!-- Punteggio -->
                            <span class="text-center">{{ element.vote_average }}</span>                
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        
    </main>
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
            return{
                store,
                check: true
            }
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
    main{
        
        .jumbocover{
            background: linear-gradient(rgba(2, 2, 2, 0.8), rgba(0, 0, 0, 0.5)), url("https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/46a51291-77f4-4941-ba0d-d93912a9d6fd/IT-it-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg");
            background-size: cover;
            background-position: center;

            p{
                width: 500px;
            }

            p, h2{
                background-color: transparent;
            }
        }


        #mainContainer{
            padding-inline: 20px;
        }

        
        #cont{
        gap: 10px;

        #singleCard{
            flex-basis: calc(100% / 8 - 10px);
            margin-bottom: 10px;
            z-index: 0;

            img:hover{
                opacity: 0.1;

            }

            #Info{
                background-color: transparent;
                opacity: 0;
                left: 5px;
            
                #langflag{
                    width: 30px;
                    margin: 0 auto;
                }

                span{
                    background-color: transparent
                }
            }

            img:hover + #Info{
                opacity: 1;
            }


        }        
    }

    }


    @media screen and (max-width: 768px)  {
        #singleCard{
            flex-basis: calc(100% / 5 - 10px);
        }
    }
</style>