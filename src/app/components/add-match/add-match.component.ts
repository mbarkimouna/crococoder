import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match:any={};
  addMatchForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private matchService:MatchService) { }

  ngOnInit() {
     this.addMatchForm=this.formBuilder.group({
    teamOne:[""],
    teamTwo:[""],
    scoreOne:[""],
    scoreTwo:[""]
  })
  }
  addMatch(){
    this.matchService.addMatch(this.match).subscribe(
    () =>{
      this.router.navigate(['admin'])
    } )
  }
    
    
  }


