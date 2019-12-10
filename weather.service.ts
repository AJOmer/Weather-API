import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherService(name){
  	console.log("HELLO");
  	return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+name+"&units=imperial&APPID=d58ede45d2d5f90d293ddecbbc1e8762")
  }
}
