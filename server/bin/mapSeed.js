require('dotenv').config();
const Maps = require('../models/Map');
const mongoose = require('mongoose');
const dbURL = process.env.MONGO_URL;

mongoose.connect(dbURL)
  .then(() => {
    let maps = [{
      title: "Geological Map",
      description: "Mapa con las unidades cronolitoestratigráficas de la zona cubierta por la hoja separadas por distintos tipos de contactos: normal o concordante, discordante, intrusivo y de otra índole. La estructura tectónica se representa mediante las trazas cartográficas de los pliegues, la orientación y buzamiento de los elementos planares y lineares contenidos en las rocas, así como por la relación estructural -mediante fallas y cabalgamientos- entre los conjuntos rocosos diferenciados cartográficamente.",
      wmsURL: "http://mapas.igme.es/gis/services/Cartografia_Geologica/IGME_Geologico_200/MapServer/WMSServer?",
      layer: "0",
      legendURL: "http://mapas.igme.es/servicios/WMS/Legends/Geo1M_LitologiasColor.png",
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    }, {
      title: "Land Use",
      description: "Información de Ocupación de Suelo de España (SIOSE) 2005 y 2011 y CORINE Land Cover (1990, 2000, 2006 y 2012). La denominación de la Cubierta Terrestre y Usos del Suelo es conforme con las especificaciones de la Directiva Inspire 2007/2/EC (nombre, título y estilo Inspire por defecto). Las capas con denominación Inspire de Cubierta Terrestre muestran datos procedentes de CORINE Land Cover, mientras que Usos de Suelo, de SIOSE.",
      wmsURL: "http://www.ign.es/wms-inspire/ocupacion-suelo?",
      layer: "LU.ExistingLandUse",
      legendURL: "http://www.ign.es/wms-inspire/ocupacion-suelo?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=LU.ExistingLandUse&style=LU.ExistingLandUse.Default",
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    }, {
      title: "Elevations model",
      description: "Servicio Web de Mapas conforme Inspire ISO19128/WMS1.3.0 que permite acceder a Modelos Digitales del Terreno de España en diversos sistemas de referencia: Modelo Digital de Elevaciones, Modelo Digital de Pendientes, Modelo Digital de Orientaciones y Relieve. Contiene una capa que pertenece al Tema de Elevaciones del Anexo II de Inspire y del Anexo I de LISIGE.",
      wmsURL: "http://www.ign.es/wms-inspire/mdt?",
      layer: "EL.GridCoverage",
      legendURL: "http://www.ign.es/wms-inspire/mdt/leyendas/EL.GridCoverage.Default.png",
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    }];
    let mapsObj = maps.map(m => {
      return new Maps(m).save()
        .then(obj => console.log(`New map created`));
    }).catch(e => console.log(e));
  });
