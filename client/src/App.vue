<template>\
<dive>
  
  <page-header></page-header>
  <p> Todo - app content </p>

  <page-footer></page-footer>
  
  <state-list></state-list>

</dive>
</template>
  

<script>

import PageHeader from '@/components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import StateList from './components/StateList.vue'


export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    StateList
   
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
