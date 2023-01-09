<template>
  <form>
    <input
      type="text"
      placeholder="Find post..."
      @input="searchPost($event.target.value)"
    />
  </form>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "SearchComponent",
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    searchPost(value) {
      this.mainStore.searchPost(value);
    },
  },
};
</script>

<style scoped>
input {
  border: 2px solid green;
  border-radius: 8px;
  padding: 12px 32px 12px 9px;
  margin-bottom: 11px;
  width: 100%;
}
</style>
