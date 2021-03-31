<template>
  <div style="position: relative">
    <header>
      <h1>FUKUSHIMA WELCOME MAP</h1>
    </header>
    <div id="map" ref="map">
    </div>
    <div class="button-top">
      <img src="~assets/home.svg" width="32" height="32">
    </div>
    <div class="button-search">
      <img src="~assets/search.svg" width="32" height="32">
    </div>

    <transition name="modal" appear v-if="modal">
      <div class="modal modal-overlay">
        <div class="modal-window" style="height: 10rem">
          <div class="modal-header" style="position: relative">
            {{ store_title }}
            <button @click="closeModal" style="position: absolute;right: .5rem;top: .5rem;background: none;border: none;font-size: 1.5rem;cursor: pointer">×</button>
          </div>
          <div class="modal-content" style="overflow-y: auto;max-height: 50vh;" v-html="store_detail">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  layout: "unicoin_map",
  data(){
    return {
      modal: false,
      store_title: undefined,
      store_detail: undefined,
      map:'',
      myLatLng:{lat: 37.7548705, lng: 140.465902},
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
        this.map = new google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 17,
          mapTypeId : google.maps.MapTypeId.ROADMAP,
          mapTypeControlOptions: {
		        position: google.maps.ControlPosition.BOTTOM_CENTER
          },
          mapTypeControl: false,
          scrollwheel: true,
          fullscreenControl: false,
          styles: [
            {
              featureType: 'poi.business',
              stylers: [
                { "saturation": -100,
                  "lightness": -100,
                  "visibility": "simplified",
                  "weight": -100 }
              ],
            },
            {
              featureType:'landscape.man_made',
              stylers: [
                { visibility: 'off' }
              ],
            },
            {
              featureType:'poi.school',//学校関連
              stylers: [
                { visibility: 'off' }
              ],
            }
          ],
        });

        var infoWindow = new google.maps.InfoWindow();

       this.map.data.addGeoJson({
          "type": "FeatureCollection",
          "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
          "features": [
            { "type": "Feature", "properties": { "name": "ラウニオン", "description": "テスト用ポイント１です。", "type": "point",     "icon": "https://maps.multisoup.co.jp/exsample/common/img/ms/pin_01.png"}, "geometry": { "type": "Point", "coordinates": [ 140.4661864, 37.7542508, 0.0 ] } },
            { "type": "Feature", "properties": { "name": "ポイント2", "description": "テスト用ポイント２です。", "type": "point",     "icon": "https://maps.multisoup.co.jp/exsample/common/img/ms/pin_04.png" }, "geometry": { "type": "Point", "coordinates": [ 140.4661864, 37.7542508, 0.0 ] } },
          ]
        });

        this.map.data.setStyle(function(feature) {
          if (feature.getProperty('type') === 'point') {
            // マーカーのスタイル
            return ({
              icon: {
                url:  feature.getProperty('icon'),
                scaledSize: new google.maps.Size(32, 32)
              }
            });
          } else if (feature.getProperty('type') === 'polyline') {
            // ポリラインのスタイル
            return ({
              strokeColor: '#0000ff',
              strokeWeight: 2,
              clickable: true,
              zIndex: 1
            });
          } else if (feature.getProperty('type') === 'polygon'){
            // ポリゴンのスタイル
            return ({
              fillColor: '#ff0000',
              fillOpacity: 0.5,
              strokeWeight: 0,
              clickable: true,
              zIndex: 1
            });
          }
        });

        const that = this;

        	// クリックイベントの定義
        this.map.data.addListener('click', function(event) {
          that.modal = true;
          that.store_title = event.feature.getProperty('name');
          that.store_detail = event.feature.getProperty('description');
        });
      }
    },500)
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    }
  },
}
</script>

<style scoped>
.button-top {
  position: absolute;
  background: #e1ded5;
  width: 3rem;
  padding: .3rem 0;
  border-radius: 1rem;
  text-align: center;
  transition: .5s;
  top: 6vh;
  left: .5rem;
  cursor: pointer;
}
.button-search {
  position: absolute;
  background: #e1ded5;
  width: 3rem;
  padding: .3rem 0;
  border-radius: 1rem;
  text-align: center;
  transition: .5s;
  top: 6vh;
  left: 4rem;
  cursor: pointer;
}
h2 {
  font-size: 1.5rem;
}
header {
  height: 5vh;
  background: #e1ded5;
  padding-top: 1.5vh;
}
h1 {
  font-family: 'Meiryo';
  font-size: 2vh;
  font-weight: bold;
  color: #825124;
  text-align: center;
}
#map {
  height: 95vh;
  width: 100%;
}

.modal-overlay {
  display: flex;
  height: 100%;
  left: 5%;
  padding: 5vh 0;
  position: fixed;
  top: calc(90% - 10rem);
  z-index: 30;
}

.modal-window {
  background: #FFF;
  border-radius: 4px;
  overflow: hidden;
  width: 80vw;
}

.modal-content {
  padding: .5rem 1rem;
}

.modal-header {
  font-size: 1.5rem;
  background: #e1ded5;
  padding: 5px;
  color: #825124;
}

.modal-enter-active , .modal-leave-active {
  transition: opacity .4s;
}

.modal-enter-active .modal-window {
  transition: opacity .4s, transform .4s;
}

.modal-leave-active .modal-window {
  transition: opacity .4s, transform .4s;
}

.modal-leave-active {
  transition: opacity .6s ease .4s;
}

.modal-enter , .modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

@media screen and (max-width: 768px) {
}
@media screen and (min-width: 769px) {
  .modal-overlay {
    left: calc(50% - 10rem);
  }
  .modal-window {
    background: #FFF;
    border-radius: 4px;
    overflow: hidden;
    width: 20rem;
  }
  header {
    padding-top: .3rem;
  }
  h1 {
    font-size: 3.5vh;
  }
}


 </style>