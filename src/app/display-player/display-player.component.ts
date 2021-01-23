import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerssService } from '../services/playerss.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  id:any;
  player:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private playerService:PlayerssService
  ) { }

  ngOnInit() {
    
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      data=>{
        this.player=data;
      }
    )
  }

}
