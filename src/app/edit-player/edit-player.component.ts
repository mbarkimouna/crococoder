import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerssService } from '../services/playerss.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player:any={};
  id:any;
  addPlayerForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
             private router: Router,
             private playerService: PlayerssService,
             private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      data=>{
        this.player=data;
      }
    );
    this.addPlayerForm = this.formBuilder.group({
      Name: [""],
      numberPlayer: [""],
      poste: [""],
      team: [""]
    })
  }

  editPlayer() {
    this.playerService.updatePlayer(this.player).subscribe(
      () => {
        this.router.navigate(['admin'])
      })
  }
}

