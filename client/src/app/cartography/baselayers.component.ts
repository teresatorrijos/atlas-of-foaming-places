
import { Component, OnInit, Input } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'leafletBaselayers',
  templateUrl: './baselayers.component.html',
  styleUrls: ['./baselayers.component.css']
})
export class LeafletBaseLayersComponent {
  @Input() coordinates: any;
  // @Input() title: any;
  // @Input() description: any;
  @Input() wmsURL: any;
  @Input() layer: any;
  // @Input() legend: any;
  LAYER_OSM: any;
  LAYER_WMS: any;
  layersControlOptions: any;
  baseLayers: any;
  options: any;

  constructor(){
    this.LAYER_OSM = {
      id: 'openstreetmap',
      name: 'Open Street Map',
      enabled: false,
      layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        attribution: 'Open Street Map'
      })
    };
    this.LAYER_WMS = {
     id: "WMS",
     name: "WMS",
     enabled: false,
     layer: L.tileLayer.wms("http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geologico_200/MapServer/WMSServer?", {
       maxZoom: 30,
       layers: "0",
       attribution: 'WMS'
     })
   };

   this.layersControlOptions = { position: 'bottomright' };
   this.baseLayers = {
     "WMS": this.LAYER_WMS.layer,
     'Open Street Map': this.LAYER_OSM.layer
   };
   this.options = {
     zoom: 12,
     center: L.latLng(39.5,-3)
   };
  }
  ngOnInit(){
    this.options.center = L.latLng(this.coordinates)
  }
}
