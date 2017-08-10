import { Routes } from "@angular/router";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AtlasComponent } from './atlas/atlas.component';
import { GeneralMapComponent } from './general-map/general-map.component';
import { LeafletBaseLayersComponent } from './cartography/baselayers.component';
import { LeafletLayersComponent } from './cartography/layers.component';
import { ErrorComponent } from './error/error.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewPlaceComponent },
  { path: 'places/:id', component: PlaceDetailComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'atlas', component: AtlasComponent },
  { path: 'geralmap', component: GeneralMapComponent },
  { path: 'map2', component: LeafletBaseLayersComponent },
  { path: 'map3', component: LeafletLayersComponent },
  { path: 'prueba', component: PruebaComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];
