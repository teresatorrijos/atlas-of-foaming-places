import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.css']
})
export class AtlasComponent implements OnInit {
  places:Observable<Array<object>>;
  user:any;

  constructor(private placeService: PlaceService, private session:SessionService) { }

  ngOnInit() {
    this.placeService.indexAtlas()
    .subscribe(
      (place => {
        this.places = place
        console.log(this.places)}
      ),
      (err => console.log(err))
    )
  }

}
