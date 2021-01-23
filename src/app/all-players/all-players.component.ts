import { Component, OnInit } from '@angular/core';
import { PlayerssService } from '../services/playerss.service';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  
  players: any;
  constructor(private playerService:PlayerssService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      data =>{
        this.players = data;
      }

    );
    
    }
  }