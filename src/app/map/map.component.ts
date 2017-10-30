import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Incident } from '../data/incident';
import { IncidentService } from '../services/incident.service';
import { GooglemapService } from '../services/googlemap.service';
import { scrollTo } from 'ng2-utils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  // googlemap setting default information   
  private title: string = 'Traffic Map App';
  private zoom: number = 12;
  private lat: number = -37.816667;
  private lng: number = 144.966667;
  private map: any;  

  private observableIncidents: Observable<Incident[]>;
  private incidents: Incident[] = []; 
  private visibleIncidents: Incident[] = [];
  private numberOfIncidents: number;  
  private resultsFound: string;    
  private httpErrorMsg: String;
  private errMsg: String;
  private cnt: number = 0;
  private markerId: String;

  constructor(private incidentService: IncidentService,
              private googlemapService: GooglemapService) { } 

  //fetch the data from dataservice
  ngOnInit() {
    this.observableIncidents = this.incidentService.getIncidentsWithObservable();
    this.observableIncidents.subscribe(            
            incidents => { this.incidents = incidents; },  
            error =>  this.httpErrorMsg = <any>error ); 
  }

  // save map for calculation for the bounds for the visible area 
  public loadAPIWrapper(map) {    
    this.map = map;
  }

  // idle() event => when users pan and zoom the map
  ChangeMap(event): void {
    this.ngOnInit;
     
    if(this.incidents.length==0 ){ 
      let cnt:number = Number(sessionStorage.getItem("cnt"));
      if(cnt==null){cnt=0}else{cnt++;}
      sessionStorage.setItem("cnt", cnt+"");
      if(Number(sessionStorage.getItem("cnt")) >3){
        sessionStorage.clear();
        this.errMsg = "Failed to load the Data."
      }else{
        window.location.reload(); 
      }                    
    }else{        
      this.visibleIncidents = this.googlemapService.calculateBounds(this.map, this.incidents, this.visibleIncidents);      
      this.numberOfIncidents = this.visibleIncidents.length;      
      this.resultsFound = this.numberOfIncidents + " Results Found";              
    }
  }

  //when users click the specific marker, scroll to the matching item of the list
  scrollTo(selector, parentSelector, horizontal){
    scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      0               // distance from top or left
    );
  }

  //when users click the specific marker, highlight the item of the list
  setStyles(listId) {
    let selected:boolean = this.isSelected(listId);
    let styles = {
      'color': selected ? 'red' : 'black',
      'font-size': selected ? '1.5em' : 'inherit'
    };
    return styles;
  }

  selected (markerId) {
    this.markerId = markerId;    
  }

  isSelected(listId) {
    return this.markerId === listId;
  }

}
