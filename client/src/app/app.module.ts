import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { PlaceService } from '../services/place.service';
import { UserService } from '../services/user.service';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { FileUploadModule } from "ng2-file-upload";
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AtlasComponent } from './atlas/atlas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {} from '@types/googlemaps';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { ErrorComponent } from './error/error.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { GeneralMapComponent } from './general-map/general-map.component';
import { AgmCoreModule } from '@agm/core';
import { CartographyComponent } from './cartography/cartography.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    NewPlaceComponent,
    PlaceDetailComponent,
    UserProfileComponent,
    AtlasComponent,
    NavbarComponent,
    ErrorComponent,
    HowItWorksComponent,
    GeneralMapComponent,
    CartographyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LeafletModule,
    FileUploadModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
  apiKey: 'AIzaSyDE604pNrwO-AYiT5gkdY3KD_o72Qbqyfw',
  libraries: ['places']
})
  ],
  providers: [SessionService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
