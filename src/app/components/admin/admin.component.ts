import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerssService } from 'src/app/services/playerss.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches: any;
  players: any;
  constructor(private matchService: MatchService,
              private router: Router,
              private playerService: PlayerssService) { }

  ngOnInit() {
    this.getMatches();
    this.getPlayers();
  }
  deleteMatchComponent(id: any) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches();
      }
    )
  }
  deletePlayerComponent(id: any) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        this.getPlayers();
      }
    )
  }
  getMatches() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data;
      }
    )
  }
  getPlayers() {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data;
      }
    )
  }
  goToMatch(id: any) {
    this.router.navigate([`displayMatch/${id}`])
  }

  goToEditMatch(id: any) {
    this.router.navigate([`editMatch/${id}`])
  }
  goToEditPlayer(id: any) {
    this.router.navigate([`editPlayer/${id}`])
  }
  goToPlayer1(id: any) {
    this.router.navigate([`displayPlayer/${id}`])
  }

}

