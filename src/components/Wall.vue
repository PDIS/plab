<template>
  <div>
    <div class="ui container">
      <h1 class='ui center aligned header'>plab</h1>
      <description></description>
      <div class="ui divider"></div>
      <post></post>
    </div>
  </div>
</template>
<script>
import description from './description'
import post from './post'
export default {
  name: 'Wall',
  components: {
    description,
    post
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
