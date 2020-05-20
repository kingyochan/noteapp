<template>
  <div class="home">
    <Item v-for="post in posts"
     :key="post.id"
     :post="post"
     class="list-none my-5"
    />
  </div>
</template>

<script>

import Item from '@/components/Item' 
import HelloWorld from '@/components/HelloWorld.vue'
import { db } from '@/main' 

export default {
  name: 'Home',

  components: {
    Item
  },
  data() {
    return {
      posts: []
    }
  },
  firestore() {
    return {
      posts: db.collection('posts')
    }
  }
}
</script>
