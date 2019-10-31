import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() location: string;

  lat = 20.5937;
  lng = 78.9629;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  mapReadyHandler() {
    this.mapService.geocodeLocation(this.location).subscribe(
      (coordinates)=>{
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      }
    );
  }

}
