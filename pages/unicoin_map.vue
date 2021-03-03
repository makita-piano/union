<template>
  <div id="map" ref="map"></div>
</template>
<script>
export default {
  layout: "unicoin_map",
  data(){
    return {
      map:'',
      myLatLng:{lat: 37.7548777, lng: 140.4636929},
      storesLatLng:{
        1: {lat: 37.7542508, lng: 140.4661864},
      }
    }
  },
  mounted(){
    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_MAP_APIKEY;
    script.async = true;
    document.head.appendChild(script);

    let timer = setInterval(() => {
      if(window.google){
        clearInterval(timer);
        this.map = new window.google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 17
        });

        // union
        new window.google.maps.Marker({position: this.myLatLng,map: this.map})

        // stores
        new window.google.maps.Marker({position: this.storesLatLng["1"],map: this.map})
      }
    },500)
  }
}
</script>

<style scoped>
#map {
   width: 100%;
   height: 100vh;
   background-color: grey;
 }
 </style>