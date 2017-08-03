import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { PlaceService } from '../../services/place.service';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASE_URL}/api/places`
  });

  newPlace = {
    pdescription: '',
    location: '',
    tags: []
  };
  // feedback:string;

  constructor(public router: Router) { }

  ngOnInit() {
    // this.uploader.onSuccessItem = (item, response) => {
    //   this.feedback = JSON.parse(response).message;
    //   this.router.navigate(['/']);
    // };
    //
    // this.uploader.onErrorItem = (item, response, status, headers) => {
    //   this.feedback = JSON.parse(response).message;
    // };
  }

  addSpec(value){
    this.newPlace.tags.push(value);
  }

  submit(){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('pdescription', this.newPlace.pdescription);
      form.append('location', this.newPlace.location);
      form.append('tags', JSON.stringify(this.newPlace.tags));
    };

   this.uploader.uploadAll();
  }
}
