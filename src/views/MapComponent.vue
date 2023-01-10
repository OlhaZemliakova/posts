<template>
  <div id="mapid"></div>
  <ModalComponent
    :open="isOpen"
    :modalData="modalData"
    @close="closeModal($event)"
    @save="saveMarker($event)"
  />
</template>

<script>
import leaflet from "leaflet";

import ModalComponent from "@/components/ModalComponent.vue";

export default {
  components: { ModalComponent },
  name: "MapComponent",

  data() {
    return {
      markers: [],
      isOpen: false,
      modalData: "",
    };
  },

  setup() {
    let mymap;

    return { mymap };
  },

  mounted() {
    this.mymap = leaflet.map("mapid").setView([49.037818, 31.622126], 6);
    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(this.mymap);

    this.mymap.on("click", this.openModal);

    this.restoreSavedMarkers();
  },

  methods: {
    closeModal() {
      this.isOpen = !this.isOpen;
    },
    openModal(event) {
      this.modalData = event.latlng;
      this.isOpen = true;
    },
    saveMarker(marker) {
      this.markers.push(marker);
      localStorage.setItem("markers", JSON.stringify(this.markers));
      this.createMarker(marker.lat, marker.lng, marker.title);
      this.closeModal();
    },
    createMarker(lat, lng, title = "marker") {
      leaflet.marker([lat, lng]).addTo(this.mymap).bindTooltip(title);
    },
    restoreSavedMarkers() {
      const storedData = localStorage.getItem("markers");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        parsedData.forEach((element) => {
          this.createMarker(element.lat, element.lng, element.title);
        });

        this.markers = parsedData;
      }
    },
  },
};
</script>

<style scoped>
#mapid {
  width: 100%;
  height: 600px;
}
</style>