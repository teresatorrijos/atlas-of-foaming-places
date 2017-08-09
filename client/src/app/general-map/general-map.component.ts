import { Component, OnInit, NgModule, Injector, ApplicationRef, ComponentFactoryResolver, NgZone, ElementRef, ViewChild } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule, MapsAPILoader} from 'angular2-google-maps/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-general-map',
  templateUrl: './general-map.component.html',
  styleUrls: ['./general-map.component.css']
})
export class GeneralMapComponent implements OnInit {
  
  locations: Array<object>=[];
    constructor(private placeService: PlaceService) {
      this.placeService.indexAtlas().subscribe(places =>{
        this.locations = places
        console.log(this.locations);
      }
      );
    }
    ngOnInit() {}

  }
