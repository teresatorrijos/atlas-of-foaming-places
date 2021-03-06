import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { Observable } from 'rxjs';
import {AgmCoreModule, MapsAPILoader} from '@agm/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.css']
})
export class AtlasComponent implements OnInit {
  places:Observable<Array<object>>;
  user:any;
  public searchControl: FormControl;

  constructor(private placeService: PlaceService, private session:SessionService) { }

  ngOnInit() {
    this.searchControl = new FormControl();


    this.placeService.indexAtlas()
    .subscribe(
      (places => {
        this.places = places
        console.log(this.places)}
      ),
      (err => console.log(err))
    )
  }

}
