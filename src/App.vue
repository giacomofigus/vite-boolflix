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

        const input = document.getElementById("searchBar")
          const magn = document.getElementById("search")

          if (input.classList.contains("active")) {     
            input.classList.remove("active");
          } else {
            input.classList.add("active");
          }

        // Se il value non è vuoto, controllando anche se ci siano degli spazi esternamente alla parola
        if (this.store.valueFilm.trim() !== '') {

            this.store.ApiUrl = this.store.ApiUrl.replace(/&query=.*/, '');

            this.store.ApiSeries = this.store.ApiSeries.replace(/&query=.*/, '')

            this.store.ApiUrl += `&query=${this.store.valueFilm}`

            this.store.ApiSeries += `&query=${this.store.valueFilm}`
        }
        
        axios.get(store.ApiUrl).then((res) =>{
          store.arrayFilms = res.data.results
          console.log(store.arrayFilms);      

        })

        axios.get(store.ApiSeries).then((res) => {
          this.store.arraySeries = res.data.results;
          console.log(store.arraySeries);
        });
      }
    }
  }
</script>

<template>
  <AppHeader @searchFilm="getFilms()"/>
  <AppMain/>
</template>

<style lang="scss">
  @use './styles/general.scss'
</style>
