import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.css']
})
export class EditAddComponent implements OnInit {
  match:any={};
  id:any;
  click:any;
  addMatchForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private matchService:MatchService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.addMatchForm=this.formBuilder.group({
      teamOne:[""],
      teamTwo:[""],
      scoreOne:[""],
      scoreTwo:[""]
    });
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id!=null){
      this.matchService.getMatchById(this.id).subscribe(
        (data)=>{
          this.match=data;
        }
      )
      this.click='edit match';

    }else{
      this.click='add match';

    }

  }

  
  addMatch(){
    this.matchService.addMatch(this.match).subscribe(
    () =>{
      this.router.navigate(['admin'])
    } )
  }
  editMatch() {
    this.matchService.updateMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin'])
      })
  }
  editAddMatch(){
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id',this.id);
    if(this.id==null){
       console.log('add match',this.id);
       this.addMatch();
    }else{
      console.log('edit match',this.id);
      this.editMatch();
    }


    }
  }


