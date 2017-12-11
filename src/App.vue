<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>
  <style type="text/css">

  .ui.footer.segment {
    margin: 5em 0em 0em;
    padding: 5em 0em;
  }
  </style>
<script>
import header from './components/header'
import footer from './components/footer'
export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
