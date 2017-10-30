import { Injectable } from '@angular/core';
import { Incident } from '../data/incident';

@Injectable()
export class GooglemapService {

  constructor() { }

  private visibleIncidents: Incident[];

  public get getVisibleIncidents(){
    return this.visibleIncidents;
  }

  public set setVisibleIncidents(visibleIncidents:Incident[]){
    this.visibleIncidents = visibleIncidents;
  }

  public calculateBounds(map:any, incidents:Incident[], visibleIncidents:Incident[]): Incident[]{

    this.visibleIncidents=[];

    //calculation for the visible markers of the current map and converting lat&long
    for(var i =0; i<incidents.length; i++){        
      if( map.getBounds().getSouthWest().lat() < incidents[i].lat 
          && incidents[i].lat < map.getBounds().getNorthEast().lat()
          && map.getBounds().getSouthWest().lng() < incidents[i].long
          && incidents[i].long < map.getBounds().getNorthEast().lng()  ) {
        incidents[i].lat=Number(incidents[i].lat);
        incidents[i].long=Number(incidents[i].long);
        this.visibleIncidents.push(incidents[i]);
      }
  };
    return this.visibleIncidents; 	 
  }
  
}
