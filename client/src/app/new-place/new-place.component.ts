import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { PlaceService } from '../../services/place.service';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { EXIF } from "exif-js";

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/api/places/new'
  });

  newPlace = {
    pdescription: '',
    localizacion: '',
    tags: []
  };
  place: any;
  feedback: any;
  user:any;
  error: string;

  constructor( private placeSession: PlaceService,
               private session: SessionService,
               public router: Router) { }

  ngOnInit() {
   this.session.getLoginEmitter().subscribe(user => this.user=user);
   this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      console.log(this.feedback);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
      console.log(this.feedback)
    };

    interface HTMLInputEvent extends Event {
      target: HTMLInputElement & EventTarget;
    }

    document.getElementById("file-input").onchange = function(e?: HTMLInputEvent) {
      EXIF.getData(e.target.files[0], function() {
        var latitude = EXIF.getTag(this, "GPSLatitude"),
            longitude = EXIF.getTag(this, "GPSLongitude");
        alert("I was taken by a " + latitude + " " + longitude);
      });
    }
  }

  addTag(value){
   this.newPlace.tags.push(value);
  }

  // getGPSInfo() {
  //   getGPS();
  // }

  submit(){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('pdescription', this.newPlace.pdescription);
      form.append('localizacion', this.newPlace.localizacion);
      form.append('tags', JSON.stringify(this.newPlace.tags));
    };

   this.uploader.uploadAll();
  //  this.getGPSInfo();
  }

}
