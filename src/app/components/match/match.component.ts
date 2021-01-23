import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() m: any;
  @Output() newMatches:EventEmitter<any>=new EventEmitter();          
  constructor(private matchService:MatchService) { }

  ngOnInit() {
  }
  compare(x:number,y:number){
    if(x>y){
    return'green';
    }else
    if(x<y){
    return 'red';
    }else{
    return'blue';}
  }
  result(x:number,y:number){
    if(x>y){
    return'win';
    }else
    if(x<y){
    return 'loss';
    }else{
    return'draw';}
  }
  deleteMatch(id:number){
    alert(id);
    this.matchService.deleteMatch(id).subscribe(
      ()=>{
        console.log('Match deleted');
        this.matchService.getAllMatches().subscribe(
          data=>{
            this.newMatches.emit(data);

          }
        )
      }
    )
  }

}
