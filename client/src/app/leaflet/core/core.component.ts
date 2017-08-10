// import { Component } from '@angular/core';
//
// import * as L from 'leaflet';
//
// import { LeafletCoreModel } from './core.model';
//
// @Component({
// 	selector: 'leafletCore',
// 	templateUrl: './core.component.html',
// 	styleUrls: ['./core.component.css']
// })
// export class LeafletCoreComponent {
//
// 	optionsSpec: {
// 		layers: any[],
// 		zoom: number,
// 		center: number[]
// 	} = {
// 		layers: [
// 			{
// 				url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
// 				maxZoom: 18,
// 				attribution: 'Open Cycle Map'
// 			},
// 			{
// 				url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
// 				maxZoom: 18,
// 				attribution: 'Open Street Map'
// 			},
// 		],
// 		zoom: 5,
// 		center: [ 46.879966, -121.726909 ]
// 	};
//
// 	// Fields for managing the form inputs and binding to leaflet zoom/center
// 	model = new LeafletCoreModel(
// 		this.optionsSpec.center[0],
// 		this.optionsSpec.center[1],
// 		this.optionsSpec.zoom
// 	);
// 	zoom: number;
// 	center: L.LatLng;
//
// 	/*
// 	 * This are the leaflet map options that we're going to use for input binding
// 	 */
//
// 	options = {
// 		layers: this.optionsSpec.layers.map((l) => {
// 			return L.tileLayer(l.url, { maxZoom: l.maxZoom, attribution: l.attribution });
// 		}),
// 		zoom: this.optionsSpec.zoom,
// 		center: L.latLng({ lat: this.optionsSpec.center[0], lng: this.optionsSpec.center[1] })
// 	};
//
// 	fitBoundsOptions = {
// 		padding: 100,
// 		maxZoom: 10,
// 		animate: true,
// 		duration: 1
// 	};
//
// 	panOptions = {
// 		animate: true,
// 		duration: 1
// 	};
//
// 	zoomOptions = {
// 		animate: true,
// 		duration: 1
// 	};
//
// 	zoomPanOptions = {
// 		animate: true,
// 		duration: 1
// 	};
//
// 	onApply() {
// 		this.zoom = this.model.zoom;
// 		this.center = L.latLng([ this.model.latitude, this.model.longitude]);
//
// 		return false;
// 	}
//
// }