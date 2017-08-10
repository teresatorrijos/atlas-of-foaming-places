import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css'],
  providers: [MapService]
})
export class PlaceDetailComponent implements OnInit {
  place: Object;
  show: boolean;
  showGeoInfo: boolean;
  maps: any;

  constructor(
    private placeService: PlaceService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private mapService: MapService
  ) {
      activeRoute.params.mergeMap( p => placeService.show(p.id))
        .subscribe((place: Object) => {
          console.log(place);
          this.place = place;
        });
      this.show = false;
      this.showGeoInfo = false;
  }

  ngOnInit() {}

  showForm() {
    this.show = !this.show;
  }

  editPlace(id, myForm) {
    this.placeService.update(id, myForm.value).subscribe((place) => console.log(place));
  }

  remove(id) {
    this.placeService.remove(id).subscribe();
    this.router.navigate(['']);
  }

  createFavorite(place) {
    this.placeService.createFavorite(this.session.user._id, place).subscribe(favorite => console.log(favorite));
  }

  createGeoInfo() {
    this.showGeoInfo = !this.showGeoInfo;
    this.mapService.indexMaps().subscribe(maps => {
       this.maps=maps;
     console.log(this.maps); });
  }
}
