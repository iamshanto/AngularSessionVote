import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Candidate} from "./candidate.class";
import {Vote} from "../vote/vote.class";
import any = jasmine.any;

@Component({
  selector: 'candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate;
  @Input() voteState: {};
  @Output() voteCust = new EventEmitter<Candidate>();
  constructor() { }

  ngOnInit() {
  }

  addVote(candidate: Candidate){
    //candidate.addVote(new Vote(null));
    candidate.addVote(new Vote(null));
    this.voteCust.emit(candidate);
  }

}
