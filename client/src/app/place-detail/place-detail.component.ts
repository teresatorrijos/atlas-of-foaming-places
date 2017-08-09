import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {
  place: Object;
  show: boolean;

  constructor(
    private placeService: PlaceService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {
      activeRoute.params.mergeMap( p => placeService.show(p.id))
        .subscribe((place: Object) => {
          console.log(place);
          this.place = place;
        });
      this.show = false;
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
    this.placeService.createFavorite(this.session.user._id, place).subscribe( favorite => console.log(favorite));
  }
}
