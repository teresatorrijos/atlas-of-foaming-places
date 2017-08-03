import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  place:object;

  constructor(private route:ActivatedRoute, private plS:PlaceService) {
    this.route.data.subscribe((resolved) => {
      this.place = resolved['place'];
    });
  }

  ngOnInit() {
  }

}
