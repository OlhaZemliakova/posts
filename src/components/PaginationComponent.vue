<template>
  <ul>
    <li
      v-for="(page, index) in mainStore.getTotalPages"
      :key="page"
      class="page"
      :class="{
        'current-page': index === mainStore.currentPage,
      }"
      @click="selectPage(index)"
    >
      {{ page }}
    </li>
  </ul>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "PaginationComponent",

  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    selectPage(pageIndex) {
      this.mainStore.selectPage(pageIndex);
    },
  },
};
</script>

<style scoped>
ul {
  text-align: center;
}
.page {
  list-style: none;
  border: 2px solid green;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
  display: inline-block;
  margin-right: 5px;
}
.page:hover {
  background-color: green;
  transition: 0.3s;
}
.current-page {
  background-color: green;
  color: white;
}
</style>