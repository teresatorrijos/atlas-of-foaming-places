import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PlaceService } from './place.service';

@Injectable()
export class ResolvePlaceService implements Resolve<any> {

  constructor(
    private placeService: PlaceService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
      return this.placeService.get(route.params['id'])
        .catch((err) => {
          this.router.navigate(['/']);
          return Observable.of(err);
        });
  }
}
