//Incident Type
export class Incident{
  constructor( ){}
  id:number;
  incident_type: string;
  lat: number;
  long: number;
  closure_type: string;
  closed_road_name : string;
  lga: string;
  vic_roads_region: string;
  ses_region: string;
  created_at: string;
  updated_at: string;
  alert_type: string;
  melways: string;
  start_int_road_name: string;
  start_locality: string;
  updated_date: string;
  updated: string;
  locality: string;
  region: string;
  description: string;
  description_url: string;
  locale: string;
  near: string;
  list_title: string;
  list_subtitle: string;
  list_extra: string;

  //converting string type of latitude and longitude to number type for GooglemapAPI
    set lt(lat:string){
    this.lat = Number(lat);
  }
  set lg(lng:string){
    this.long = Number(lng);
  }

} 