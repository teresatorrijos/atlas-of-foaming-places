
import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable()
export class PlaceActivationService implements CanActivate {

  constructor(public sessionService: SessionService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let acceso = this.sessionService.user ? true : false;
    return acceso;
  }
}
