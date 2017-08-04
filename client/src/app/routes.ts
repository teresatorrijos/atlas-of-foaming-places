import { Routes } from "@angular/router";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResolvePlaceService } from '../services/placeResolve.service';
import { PlaceActivationService } from '../services/placeActivation.service';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home' },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewPlaceComponent },
  {
    path: 'places', component: PlacesListComponent,
    // canActivate: [PlaceActivationService],
    // resolve: { place: ResolvePlaceService }
  },
  { path: 'places/:id', component: PlaceDetailComponent },
  { path: 'user/:id', component: UserProfileComponent },
];
