<template>
  <header>
    <div class="container">
      <router-link :to="'/'">
        <button>POSTS</button>
      </router-link>
      <router-link :to="'/map'">
        <button>MAP</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
header {
  height: 80px;
  background-color: #8fba8f;
  display: flex;
  align-items: center;
}

button {
  border: 2px solid green;
  background-color: white;
  padding: 5px 10px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: green;
  border-radius: 10px;
  margin-right: 15px;
  cursor: pointer;
  box-shadow: 2px 2px 4px gray;
}

button:hover {
  background-color: green;
  color: white;
  transition: 0.3s;
}
</style>