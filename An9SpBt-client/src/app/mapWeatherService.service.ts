import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class MapWeatherServiceService {

  currentMessageLat: Observable<any>;
  currentMessageLong: Observable<any>;

  private messageSourceLat = new BehaviorSubject<any>('29');
  private messageSourceLong = new BehaviorSubject<any>('-98');
  

constructor() { 
  this.currentMessageLat  = this.messageSourceLat.asObservable();
  this.currentMessageLong  = this.messageSourceLong.asObservable();
}


// I beleive these need to be called somehow in a html reference or something like
// that, I am not entirely sure how to get this to work with no button onClick() 
// on the GeoCoder in UIMAP Component...
changeMessageLat(lat) {
  console.log('From service: ' + lat);
  this.messageSourceLat.next(lat)
  // this.currentMessageLat.next(lat)
  
}
changeMessageLong(long) {
  console.log('From service: ' + long);
  this.messageSourceLong.next(long)
  // this.currentMessageLong.next(long)
}

}
