import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerssService } from 'src/app/services/playerss.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  addPlayerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private playerService: PlayerssService) { }

  ngOnInit() {
    this.addPlayerForm = this.formBuilder.group({
      Name: [""],
      numberPlayer: [""],
      poste: [""],
      team: [""]
    })
  }
  addPlayer() {
    this.playerService.addPlayer(this.player).subscribe(
      () => {
        this.router.navigate(['admin'])
      })
  }


}
