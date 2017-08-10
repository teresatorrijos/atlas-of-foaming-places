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
  BASE_URL: string = environment.BASE_URL;

  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/api/places/new`
  });

  newPlace = {
    pdescription: '',
    tags: []
  };
  place: any;
  feedback: any;
  user: any;
  error: string;
  localizacion: Array<number>;
  locateDegree: any;
  file: any;

  constructor(private placeService: PlaceService,
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
  }

  fileChangeEvent(e: any) {
    this.file = e.target.files[0]
  }

  addTag(value) {
    this.newPlace.tags.push(value);
  }

  submit() {
    EXIF.getData(this.file, () => {
      const lat = EXIF.getTag(this.file, "GPSLatitude");
      const latRef = EXIF.getTag(this.file, "GPSLatitudeRef");
      const lng = EXIF.getTag(this.file, "GPSLongitude");
      const lngRef = EXIF.getTag(this.file, "GPSLongitudeRef");
      const latitude = this.placeService.convertGms2Dec(lat[0].numerator, lat[1].numerator, (lat[2].numerator)/100, latRef);
      const longitude = this.placeService.convertGms2Dec(lng[0].numerator, lng[1].numerator, (lng[2].numerator)/100, lngRef);
      this.locateDegree = "["+lat+" "+latRef+", "+lng+" "+lngRef+"]";
      this.localizacion = [latitude, longitude];

      this.uploader.onBuildItemForm = (item, form) => {
        form.append('pdescription', this.newPlace.pdescription);
        form.append('locateDegree', this.locateDegree);
        form.append('localizacion', JSON.stringify(this.localizacion));
        form.append('tags', JSON.stringify(this.newPlace.tags));
      };
      this.uploader.uploadAll();
    })
  }
}
