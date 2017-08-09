import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { PlaceService } from '../services/place.service';
import { UserService } from '../services/user.service';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { FileSelectDirective } from "ng2-file-upload";
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { NewPlaceComponent } from './new-place/new-place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AtlasComponent } from './atlas/atlas.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { LeafletMapsModule } from './leaflet/leaflet.module';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { LeafletBaseLayersComponent } from './cartography/baselayers.component';
import { LeafletLayersComponent } from './cartography/layers.component';
import { ErrorComponent } from './error/error.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { GeneralMapComponent } from './general-map/general-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    NewPlaceComponent,
    FileSelectDirective,
    PlaceDetailComponent,
    UserProfileComponent,
    AtlasComponent,
    NavbarComponent,
    LeafletBaseLayersComponent,
    LeafletLayersComponent,
    ErrorComponent,
    HowItWorksComponent,
    GeneralMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LeafletModule,
    // LeafletMapsModule
  ],
  providers: [SessionService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
