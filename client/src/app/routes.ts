import { Routes } from "@angular/router";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AtlasComponent } from './atlas/atlas.component';
import { LeafletCoreDemoComponent } from './leaflet/core/core-demo.component';
import { LeafletBaseLayersDemoComponent } from './leaflet/layers/baselayers-demo.component';
import { LeafletLayersDemoComponent } from './leaflet/layers/layers-demo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewPlaceComponent },
  { path: 'places/:id', component: PlaceDetailComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'atlas', component: AtlasComponent },
  { path: 'map', component: LeafletCoreDemoComponent },
  { path: 'map2', component: LeafletBaseLayersDemoComponent },
  { path: 'map3', component: LeafletLayersDemoComponent }

];
