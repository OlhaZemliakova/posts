<template>
  <div class="vue-modal" v-show="open">
    <p class="coordinates">Lat: {{ modalData.lat }}</p>
    <p class="coordinates">Lng: {{ modalData.lng }}</p>
    <input type="text" placeholder="Enter marker name" v-model="inputContent" />
    <button class="modal-button" type="button" @click="close()">Close</button>
    <button class="modal-button" type="button" @click="save()">Save</button>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",

  data() {
    return {
      inputContent: "",
    };
  },
  props: ["open", "modalData"],
  emits: ["close", "save"],
  methods: {
    close() {
      this.$emit("close");

      this.inputContent = "";
    },
    save() {
      this.$emit("save", {
        title: this.inputContent,
        lat: this.modalData.lat,
        lng: this.modalData.lng,
      });

      this.inputContent = "";
    },
  },
};
</script>

<style scoped>
.vue-modal {
  width: 300px;
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  position: absolute;
  top: 50%;
  left: 45px;
  z-index: 999;
  opacity: 0.8;
}
.coordinates {
  margin-bottom: 8px;
}

input {
  border: 2px solid green;
  border-radius: 8px;
  margin-right: 5px;
  padding: 5px;
}
.modal-button {
  background-color: green;
  border: 2px solid green;
  padding: 5px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.modal-button:hover {
  background-color: white;
  color: green;
  transition: 0.3s;
}
</style>