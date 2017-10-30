import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GooglemapService } from '../services/googlemap.service';
import { Incident } from '../data/incident';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {  
  private visibleIncidents: Incident[];

  constructor(private location: Location, 
  			  private router: Router, 	         
  	          private googlemapService: GooglemapService) { }

  ngOnInit() {  	
  	this.visibleIncidents = this.googlemapService.getVisibleIncidents;

  	if(this.visibleIncidents == null){
  		this.router.navigateByUrl("/map");
  	}
  }  

  goBack(): void {
    this.location.back();
  }

}
