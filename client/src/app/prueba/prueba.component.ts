
  import { Component, OnInit, Input } from '@angular/core';
  import * as L from 'leaflet';

  @Component({
    selector: 'app-prueba',
    templateUrl: './prueba.component.html',
    styleUrls: ['./prueba.component.css']
  })

  export class PruebaComponent {
    name:any;
    @Input() zoom:number;
    @Input() index:any;
    @Input() wmsURL:any;
    @Input() layerWMS:any;
    @Input() coordinates:any;
    map: L.Map;


    ngAfterViewInit() {
      this.name = "map"+this.index;
      this.map = new L.Map(this.name, {
        center: new L.LatLng(this.coordinates[0], this.coordinates[1]),
        zoom: this.zoom,
        scrollWheelZoom: false,
      });

      // var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',  {
      //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      //   maxZoom: 18
      // }).addTo(this.map);

      var wmsLayer = L.tileLayer.wms(this.wmsURL, {
          layers: this.layerWMS
      }).addTo(this.map);

      var d= L.marker(this.coordinates, {
        icon: L.icon({
          iconSize: [41, 41],
          iconAnchor: [41, 41],
          iconUrl: 'assets/33622.png'
        }),
        clickable: true

      }).on('click',
        (data) => {
          // alert("I have a click.")
        } ).addTo(this.map)
    }
  }
