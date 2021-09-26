<template>
  <div>
    <h3>{{ posts.title }}</h3>
    <p>{{ posts.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    };
  },
  async mounted() {
    const res = fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    const posts = await res.json();
    this.posts = posts;
    // .then((response) => response.json())
    // .then((json) => (this.posts = Array.from(json)));
    //.then((json) => (this.posts = json));

    console.log(this.posts);
  },
};
</script>

