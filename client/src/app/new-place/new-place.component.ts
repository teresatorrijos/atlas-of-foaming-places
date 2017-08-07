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
    tags: []
  };
  place: any;
  feedback: any;
  user: any;
  error: string;
  latitude: number;
  longitude: number;
  localizacion: Array<number>;

  constructor(private placeSession: PlaceService,
    private session: SessionService,
    public router: Router) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(user => this.user = user);
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      console.log(this.feedback);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
      console.log(this.feedback)
    };

    function ConvertDMSToDD(degrees, minutes, seconds, direction) {
      var dd = degrees + minutes / 60 + seconds / (60 * 60);
      if (direction == "S" || direction == "W") {
        dd = dd * -1;
      }
      return dd;
    }

    interface HTMLInputEvent extends Event {
      target: HTMLInputElement & EventTarget;
    }

    document.getElementById("file-input").onchange = function(e?: HTMLInputEvent) {
      EXIF.getData(e.target.files[0], function() {
        let lat = EXIF.getTag(this, "GPSLatitude"),
          latRef = EXIF.getTag(this, "GPSLatitudeRef"),
          long = EXIF.getTag(this, "GPSLongitude"),
          longRef = EXIF.getTag(this, "GPSLongitudeRef");
        this.latitude = ConvertDMSToDD(lat[0], lat[1], lat[2], latRef);
        this.longitude = ConvertDMSToDD(long[0], long[1], long[2], longRef);
        console.log(this.latitude + ", " + this.longitude);
      });
    }
  }

  addTag(value) {
    this.newPlace.tags.push(value);
  }

  submit() {
    this.localizacion = [this.latitude, this.longitude];
    console.log(this.localizacion);
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('pdescription', this.newPlace.pdescription);
      form.append('localizacion', this.localizacion);
      form.append('tags', JSON.stringify(this.newPlace.tags));
    };

    this.uploader.uploadAll();
  }

}
