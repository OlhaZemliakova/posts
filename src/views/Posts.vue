<template>
  <div class="row">
    <div class="col mr-15">
      <SearchComponent />
      <div v-if="mainStore.getCurrentPageList.length > 0">
        <div
          class="post"
          v-for="post in mainStore.getCurrentPageList"
          :key="post.id"
        >
          <h2 class="title">{{ post.title }}</h2>
          <p class="description">{{ post.body }}</p>
          <p>Number of commentators: {{ post.comments.length }}</p>
        </div>
        <PaginationComponent />
      </div>
      <h2 v-else>Оops... there is no such post</h2>
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
  padding: 5px;
}
.title {
  text-transform: capitalize;
  margin-bottom: 15px;
}

.description {
  text-transform: capitalize;
  margin-bottom: 15px;
}
</style>