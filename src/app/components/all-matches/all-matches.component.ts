import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  matches: any;
  constructor() { }

  ngOnInit() {
    this.matches = [
      {
        id: 1, teamOne:"RCB", teamTwo:"RIO",
        scoreOne: "5", scoreTwo:"2",
        logoOne:"assets/images/logo_1.png",
        logoTwo:"assets/images/logo_2.png"
      },
      {
        id: 1, teamOne:"AB", teamTwo:"CD",
        scoreOne: "5", scoreTwo:"2",
        logoOne:"assets/images/logo_1.png",
        logoTwo:"assets/images/logo_2.png"
      }
    
  ]

}
}
