import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { IncidentService } from './services/incident.service';
import { GooglemapService } from './services/googlemap.service';
import { Ng2ScrollableModule } from 'ng2-scrollable';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,    
    MaterialModule,
    FlexLayoutModule,
    HttpModule, JsonpModule,
    AppRoutingModule,
    Ng2ScrollableModule,
	AgmCoreModule.forRoot({
	  apiKey: "AIzaSyDWb2BBNSOH_ViziEZP5HPKhDf8X0JyTeM"
	
	})
  ],
  providers: [IncidentService, GooglemapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
