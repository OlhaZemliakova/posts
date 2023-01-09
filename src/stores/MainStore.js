import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", {
  state: () => ({
    posts: [],
    comments: [],
    searchText: "",
    currentPage: 0,
    totalPages: 0,
  }),
  actions: {
    async fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      this.posts = posts;
    },
    async fetchComments() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const comments = await response.json();
      this.comments = comments;
    },
    selectPage(pageIndex) {
      this.currentPage = pageIndex;
    },
    searchPost(text) {
      this.currentPage = 0;
      this.searchText = text;
    },
  },
  getters: {
    getAgregatedList(state) {
      return state.posts.map((post) => {
        return {
          ...post,
          comments: state.comments.filter(
            (comment) => post.id === comment.postId
          ),
        };
      });
    },
    getCurrentPageList(state) {
      const list = this.getList;
      const currentPageList = list.slice(
        state.currentPage * 10,
        state.currentPage * 10 + 10
      );
      return currentPageList;
    },
    getTotalPages() {
      const totalPages = Math.ceil(this.getList.length / 10);
      return totalPages;
    },
    getSearchPost(state) {
      if (this.searchText.length < 1) return [];

      return this.getAgregatedList.filter((post) =>
        post.title.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
    getList() {
      if (this.searchText) {
        return this.getSearchPost;
      }

      return this.getAgregatedList;
    },
  },
});
