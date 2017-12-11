<template>
  <div class="ui three column doubling grid">
        <div class="column" v-for="post in posts" :key="post.id" >
          <div class="ui fluid card">
            <a class="image" href="#">
              <img v-bind:src="post.links[0]">
            </a>
            <div class="content">
              <a class="header" href="#">{{post.title}}</a>
              <div class="meta">
                <p v-html="post.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'post',
  data () {
    return {
      posts: []
    }
  },
  created: function () {
    axios.get('https://talk.pdis.nat.gov.tw/c/plab/post.json').then(res => {
      let topics = res.data.topic_list.topics.map(topic => topic.id)
      topics = topics.slice(1)
      topics.map(topic => {
        axios.get('https://talk.pdis.nat.gov.tw/t/' + topic + '.json').then(res => {
          let post = {}
          let links = []
          post.id = res.data.id
          post.title = res.data.title
          post.content = res.data.post_stream.posts[0].cooked.split('<hr>')[0]
          if (res.data.post_stream.posts[0].link_counts === null || res.data.post_stream.posts[0].link_counts === 'undefined') {
            post.links = ''
          } else {
            for (let i in res.data.post_stream.posts[0].link_counts) {
              links[i] = res.data.post_stream.posts[0].link_counts[i].url
            }
          }
          post.links = links
          console.log(post.links[0])
          this.posts.push(post)
        })
      })
    }).then()
  }
}
</script>
