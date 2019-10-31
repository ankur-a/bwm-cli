import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [ MapComponent],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDT-Ngw6fa9-l2XPeYKZSaGWsXI7qJNrGQ'
      })
  ],
  providers: [MapService]
})
export class MapModule { }
