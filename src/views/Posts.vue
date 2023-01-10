<template>
  <div class="row">
    <div class="col mr-15">
      <SearchComponent />
      <div
        class="post"
        v-for="post in mainStore.getCurrentPageList"
        :key="post.id"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p>{{ post.comments.length }}</p>
      </div>
      <PaginationComponent />
      <router-view />
    </div>
    <div class="col">
      <PostChartComponent />
    </div>
  </div>
</template>
  
  <script>
import { useMainStore } from "@/stores/MainStore";
import SearchComponent from "@/components/SearchComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import PostChartComponent from "@/components/PostChartComponent.vue";

export default {
  name: "postsView",
  components: {
    SearchComponent,
    PostChartComponent,
    PaginationComponent,
  },
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },

  async mounted() {
    await this.mainStore.fetchPosts();
    await this.mainStore.fetchComments();
  },
};
</script>
  
  <style>
.row {
  display: flex;
}

.col {
  width: 50%;
}

.post {
  border: 2px solid green;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 4px;
}
</style>