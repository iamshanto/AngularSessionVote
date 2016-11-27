import {Component, OnInit, Input} from '@angular/core';
import {Candidate} from "./entity/candidate";

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() candidate: Candidate;

  ngOnInit() {

  }

}
