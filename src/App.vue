<script>


  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import {store} from "./store"
  import axios from 'axios'

  export default{
    components:{
      AppHeader,
      AppMain
    },

    data(){
      return{
        store
      }
    },
    methods:{
      getFilms(){

        // Se il value non è vuoto, controllando anche se ci siano degli spazi esternamente alla parola
        if (this.store.valueFilm.trim() !== '') {

            // Viene effettuato un check se all'interno del link API ci sia già presente la stringa "&query = qualsiasi cosa", e se fosse presente sostituirla con uno spazio vuoto
            this.store.ApiUrl = this.store.ApiUrl.replace(/&query=.*/, '');

            // Per poi aggiungere al link API la parola inserita all'interno del campo input
            this.store.ApiUrl += `&query=${this.store.valueFilm}`
        }
        
        axios.get(store.ApiUrl).then((res) =>{
          store.arrayFilms = res.data.results
          console.log(store.arrayFilms);     
        })

      }
    }
  }
</script>

<template>
  <AppHeader @searchFilm="getFilms()"/>
  <AppMain/>
</template>

<style lang="scss">
  
</style>
