<template>
  <div class="home">
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import SinglePost from '../components/SinglePost.vue';
import getPosts from '../composables/getPosts';
import { ref } from 'vue';

export default {
  name: 'HomeView',
  components: { SinglePost },
  setup() {
    const posts = ref([]);
    getPosts().then((data) => {
      posts.value = data;
    })
    return { posts };
  }
}
</script>
