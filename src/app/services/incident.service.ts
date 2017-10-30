import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Incident } from '../data/incident';

@Injectable()
export class IncidentService {

  constructor(private http:Http) { }
  private url = "https://victraffic-api.wd.com.au/api/v3/incidents";

  getIncidentsWithObservable(): Observable<Incident[]> {
    return this.http.get(this.url)
      .map(res => res.json().incidents  )
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
	  console.error(error.message || error);
	  return Observable.throw(error.message || error);
  } 

}
