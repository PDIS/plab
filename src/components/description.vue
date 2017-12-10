<template>
  <div>
    <p v-html="post.content"></p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'description',
  data () {
    return {
      post: { content: '' }
    }
  },
  created: function () {
    axios.get('https://talk.pdis.nat.gov.tw/t/web/601.json').then(res => {
      this.post.content = res.data.post_stream.posts[0].cooked
    })
  }
}
</script>

