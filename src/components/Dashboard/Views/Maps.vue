<template>
    <div class="card card-map">
      <div class="map">
        <v-map :zoom=2 :center="[15, 15]">
				<v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
				</v-map>
      </div>
    </div>
</template>
<script>
	import Vue2Leaflet from 'vue2-leaflet'

export default {
  name: 'oceanus',
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker,
    'v-poly': Vue2Leaflet.Polyline,
    'v-group': Vue2Leaflet.LayerGroup
  }
}

</script>
<style>
@import "~leaflet/dist/leaflet.css"
</style>
