import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
	selector: 'leafletBaselayersDemo',
	templateUrl: './baselayers-demo.component.html'
})
export class LeafletBaseLayersDemoComponent {

	// Open Street Map and Open Cycle Map definitions
	// LAYER_OCM = {
	// 	id: 'opencyclemap',
	// 	name: 'Open Cycle Map',
	// 	enabled: true,
	// 	layer: L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
	// 		maxZoom: 18,
	// 		attribution: 'Open Cycle Map'
	// 	})
	// };
	LAYER_OSM = {
		id: 'openstreetmap',
		name: 'Open Street Map',
		enabled: false,
		layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Open Street Map'
		})
	};
	LAYER_SENTINEL2 = {
		id: 'sentinel2',
		name: 'Sentinel 2',
		enabled: false,
		layer: L.tileLayer.wms('http://services.sentinel-hub.com/v1/wms/051c0b58-8b0b-4fca-816b-e4c4a4fb6ec9?', {
			maxZoom: 18,
			layers: 'ATMOSPHERIC_PENETRATION',
			attribution: 'Sentinel 2'
		})
	};

	// Values to bind to Leaflet Directive
	layersControlOptions = { position: 'bottomright' };
	baseLayers = {
		'Open Street Map': this.LAYER_OSM.layer,
		'Sentinel 2': this.LAYER_SENTINEL2.layer
		// 'Open Cycle Map': this.LAYER_OCM.layer
	};
	options = {
		zoom: 7,
		center: L.latLng([ 39.5, -3 ])
	};

}
