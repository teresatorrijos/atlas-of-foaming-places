
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
  layersWms: any;
  layersControlOptions: any;
  baseLayers1: any;
  baseLayers2: any;
  baseLayers3: any;
  baseLayers4: any;
  baseLayers5: any;
  options: any;

  constructor() {
    this.LAYER_OSM = {
      id: 'openstreetmap',
      name: 'Open Street Map',
      enabled: false,
      layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        attribution: 'Open Street Map'
      })
    };

    this.layersWms = [{
      description: "Mapa con las unidades cronolitoestratigráficas de la zona cubierta por la hoja separadas por distintos tipos de contactos: normal o concordante, discordante, intrusivo y de otra índole. La estructura tectónica se representa mediante las trazas cartográficas de los pliegues, la orientación y buzamiento de los elementos planares y lineares contenidos en las rocas, así como por la relación estructural -mediante fallas y cabalgamientos- entre los conjuntos rocosos diferenciados cartográficamente.",
      legendURL: "http://mapas.igme.es/servicios/WMS/Legends/Geo1M_LitologiasColor.png",
      id: "Geological",
      name: "Geological",
      enabled: false,
      layer: L.tileLayer.wms("http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geologico_1M/MapServer/WMSServer?", {
        maxZoom: 30,
        layers: "0",
        attribution: 'IGME'
      })
    }, {
      description: "Información de Ocupación de Suelo de España (SIOSE) 2005 y 2011 y CORINE Land Cover (1990, 2000, 2006 y 2012). La denominación de la Cubierta Terrestre y Usos del Suelo es conforme con las especificaciones de la Directiva Inspire 2007/2/EC (nombre, título y estilo Inspire por defecto). Las capas con denominación Inspire de Cubierta Terrestre muestran datos procedentes de CORINE Land Cover, mientras que Usos de Suelo, de SIOSE.",
      legendURL: "http://www.ign.es/wms-inspire/ocupacion-suelo?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=LU.ExistingLandUse&style=LU.ExistingLandUse.Default",

      id: "LandUse",
      name: "Land Use",
      enabled: false,
      layer: L.tileLayer.wms("http://www.ign.es/wms-inspire/ocupacion-suelo?", {
        maxZoom: 30,
        layers: "LU.ExistingLandUse",
        attribution: 'IGE'
      })
    }, {
      description: "Servicio Web de Mapas conforme Inspire ISO19128/WMS1.3.0 que permite acceder a Modelos Digitales del Terreno de España en diversos sistemas de referencia: Modelo Digital de Elevaciones, Modelo Digital de Pendientes, Modelo Digital de Orientaciones y Relieve. Contiene una capa que pertenece al Tema de Elevaciones del Anexo II de Inspire y del Anexo I de LISIGE.",
      legendURL: "http://www.ign.es/wms-inspire/mdt/leyendas/EL.GridCoverage.Default.png",
      id: "Elevations",
      name: "Elevations",
      enabled: false,
      layer: L.tileLayer.wms("http://www.ign.es/wms-inspire/mdt?", {
        maxZoom: 30,
        layers: "EL.GridCoverage",
        attribution: 'IGE'
      })
    }, {
      description: "Servicio Web de Mapas conforme Inspire ISO19128/WMS1.3.0 que permite acceder a Modelos Digitales del Terreno de España en diversos sistemas de referencia: Modelo Digital de Elevaciones, Modelo Digital de Pendientes, Modelo Digital de Orientaciones y Relieve. Contiene una capa que pertenece al Tema de Elevaciones del Anexo II de Inspire y del Anexo I de LISIGE.",
      legendURL: "http://www.ign.es/wms-inspire/mdt/leyendas/EL.GridCoverage.Default.png",
      id: "Elevations",
      name: "Elevations",
      enabled: false,
      layer: L.tileLayer.wms("http://adrase.ceta-ciemat.es/geoserver/Portalgeosolar/wms?", {
        maxZoom: 30,
        layers: "GHI",
        attribution: 'MAGRAMA'
      })
    }, {
      description: "Servicio Web de Mapas conforme Inspire ISO19128/WMS1.3.0 que permite acceder a Modelos Digitales del Terreno de España en diversos sistemas de referencia: Modelo Digital de Elevaciones, Modelo Digital de Pendientes, Modelo Digital de Orientaciones y Relieve. Contiene una capa que pertenece al Tema de Elevaciones del Anexo II de Inspire y del Anexo I de LISIGE.",
      legendURL: "http://www.ign.es/wms-inspire/mdt/leyendas/EL.GridCoverage.Default.png",
      id: "Elevations",
      name: "Elevations",
      enabled: false,
      layer: L.tileLayer.wms("https://landsatlook.usgs.gov/arcgis/services/Sentinel2/ImageServer/WMSServer?", {
        maxZoom: 30,
        layers: "0",
        attribution: 'MAGRAMA'
      })
    }];

    this.layersControlOptions = { position: 'bottomright' };
    this.baseLayers1 = {
      "WMS": this.layersWms[0].layer,
      'Open Street Map': this.LAYER_OSM.layer
    };
    this.baseLayers2 = {
      "WMS": this.layersWms[1].layer,
      'Open Street Map': this.LAYER_OSM.layer
    };
    this.baseLayers3 = {
      "WMS": this.layersWms[2].layer,
      'Open Street Map': this.LAYER_OSM.layer
    };
    this.baseLayers4 = {
      "WMS": this.layersWms[3].layer,
      'Open Street Map': this.LAYER_OSM.layer
    };
    this.baseLayers5 = {
      "WMS": this.layersWms[4].layer,
      'Open Street Map': this.LAYER_OSM.layer
    };
    this.options = {
      zoom: 10,
      center: L.latLng(39.5, -3)
    };
  }
  ngOnInit() {
    this.options.center = L.latLng(this.coordinates)
  }
}
//http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geologico_1M/MapServer/WMSServer
//http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geologico_200/MapServer/WMSServer
