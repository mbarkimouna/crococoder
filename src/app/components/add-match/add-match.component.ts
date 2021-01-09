import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match:any={};
  addMatchForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
     this.addMatchForm=this.formBuilder.group({
    teamOne:[""],
    teamTwo:[""],
    scoreOne:[""],
    scoreTwo:[""]
  })
  }
  addMatch(){
    console.log('here my object', this.match);
    
  }

}
