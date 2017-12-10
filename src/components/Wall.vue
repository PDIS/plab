<template>
  <div>
    <div class="ui container">
      <h1 class='ui center aligned header'>plab</h1>
      <description></description>
      <div class="ui divider"></div>
      <div class="ui three column doubling grid">
        <div class="column">
          <div class="ui fluid card">
            <a class="image" href="#">
              <img src="https://talk.pdis.nat.gov.tw/user_avatar/talk.pdis.nat.gov.tw/audreyt/800/574_1.png">
            </a>
            <div class="content">
              <a class="header" href="#">Steve Jobes</a>
              <div class="meta">
                <a>Last Seen 2 days ago</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <a class="image" href="#">
              <img src="https://talk.pdis.nat.gov.tw/user_avatar/talk.pdis.nat.gov.tw/audreyt/800/574_1.png">
            </a>
            <div class="content">
              <a class="header" href="#">Steve Jobes</a>
              <div class="meta">
                <a>Last Seen 2 days ago</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <a class="image" href="#">
              <img src="https://talk.pdis.nat.gov.tw/user_avatar/talk.pdis.nat.gov.tw/audreyt/800/574_1.png">
            </a>
            <div class="content">
              <a class="header" href="#">Steve Jobes</a>
              <div class="meta">
                <a>Last Seen 2 days ago</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <a class="image" href="#">
              <img src="https://talk.pdis.nat.gov.tw/user_avatar/talk.pdis.nat.gov.tw/audreyt/800/574_1.png">
            </a>
            <div class="content">
              <a class="header" href="#">Steve Jobes</a>
              <div class="meta">
                <a>Last Seen 2 days ago</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import description from './description'
export default {
  name: 'Wall',
  components: {
    description
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
