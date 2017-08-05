// function getGPS() {
// document.getElementById('file-input').onchange = function(e) {
//   var loadingImage = loadImage(e.target.files[0]);
//   if (!loadingImage) {
//     console.log("not loading");
//   }
//
//   loadImage.parseMetaData(
//     e.target.files[0],
//     function(data) {
//       if(!data.exif || !data.exif[0x0002]) {
//         console.log("esta imagen no tiene atributos espaciales");
//     } else {
//       var latitude = data.exif.get('GPSLatitude');
//       var latitudeRef = data.exif.get('GPSLatitudeRef');
//       var longitude = data.exif.get('GPSLongitude');
//       var longitudeRef = data.exif.get('GPSLongitudeRef');
//       console.log("latitud = "+latitude+" "+latitudeRef);
//       console.log("longitud = "+longitude+" "+longitudeRef);
//     }
//     }, {
//       maxMetaDataSize: 262144,
//       disableImageHead: false
//     }
//   );
// };
// }
// 
// module.exports = getGPS;
