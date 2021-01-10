import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { DifferentItemsComponent } from '../components/different-items/different-items.component';

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
      id: 2, teamOne:"AB", teamTwo:"CD",
      scoreOne: "5", scoreTwo:"2",
      logoOne:"assets/images/logo_1.png",
      logoTwo:"assets/images/logo_2.png"
    }
   ];
   let  players= [
    {
     id:1,Name:"mark",numberPlayer:2,poste:'Diffense',team:'ACK'
    },
    {
      id:2,Name:"aaa",numberPlayer:3,poste:'vvvvv',team:'bbb'
     
    },
    {
      id:3,Name:"fff",numberPlayer:4,poste:'ddddd',team:'ccccc'
     
    }
   ];
   return {matches,players};

  }
}
