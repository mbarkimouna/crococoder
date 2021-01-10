import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match: any = {};
  id: any;
  addMatchForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        this.match = data;
      }
    );
    this.addMatchForm = this.formBuilder.group({
      teamOne: [""],
      teamTwo: [""],
      scoreOne: [""],
      scoreTwo: [""]
    })
  }

  editMatch() {
    this.matchService.updateMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin'])
      })
  }
}



