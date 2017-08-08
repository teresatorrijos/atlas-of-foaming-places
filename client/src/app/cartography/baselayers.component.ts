
import { Component, OnInit, Input } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'leafletBaselayers',
  templateUrl: './baselayers.component.html',
  styleUrls: ['./baselayers.component.css']
})
export class LeafletBaseLayersComponent {
  @Input() coordinates: any;
  LAYER_OSM: any;
  LAYER_SENTINEL2: any;
  LAYER_GEOLOGY: any;
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
    this.LAYER_SENTINEL2 = {
     id: 'sentinel2',
     name: 'Sentinel 2',
     enabled: false,
     layer: L.tileLayer.wms('http://services.sentinel-hub.com/v1/wms/051c0b58-8b0b-4fca-816b-e4c4a4fb6ec9?', {
       maxZoom: 30,
       layers: 'ATMOSPHERIC_PENETRATION',
       attribution: 'Sentinel 2'
     })
   };

   this.LAYER_GEOLOGY = {
    id: 'geology',
    name: 'Geology',
    enabled: false,
    layer: L.tileLayer.wms('http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geologico_200/MapServer/WMSServer?', {
      maxZoom: 100,
      layers: '0',
      attribution: 'IGME'
    })
  };

   this.layersControlOptions = { position: 'bottomright' };
   this.baseLayers = {
     'Geology': this.LAYER_GEOLOGY.layer,
     'Open Street Map': this.LAYER_OSM.layer,
     'Sentinel 2': this.LAYER_SENTINEL2.layer
     // 'Open Cycle Map': this.LAYER_OCM.layer
   };
   this.options = {
     zoom: 12,
     center: L.latLng(0,0)
   };
  }
  ngOnInit(){
    this.options.center = L.latLng(this.coordinates)
  }
}
