import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches= [
    {
      id: 1, teamOne:"RCB", teamTwo:"RIO",
      scoreOne: "0", scoreTwo:"0",
      logoOne:"assets/images/logo_1.png",
      logoTwo:"assets/images/logo_2.png"
    },
    {
      id: 1, teamOne:"AB", teamTwo:"CD",
      scoreOne: "5", scoreTwo:"2",
      logoOne:"assets/images/logo_1.png",
      logoTwo:"assets/images/logo_2.png"
    }
   ];
   return {matches};

  }
}
