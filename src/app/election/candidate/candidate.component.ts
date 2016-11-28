import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Candidate} from "./candidate.class";
import {Vote} from "../vote/vote.class";

@Component({
  selector: 'candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  @Output() voteCust = new EventEmitter<Candidate>();
  @Input() candidate: Candidate;
  @Input() voteState = {
    minVote: 0,
    maxVote: 0,
    voteInput: false
  };

  constructor() { }

  ngOnInit() {
  }

  addVote(candidate: Candidate){
    if (!this.voteState.voteInput) {
      this.addVoteAfterConfirm(candidate, new Vote(null));
      return;
    }

    let voteId = prompt('Please enter your ID');
    if (voteId) {
      this.addVoteAfterConfirm(candidate, new Vote(voteId));
    }
  }

  addVoteAfterConfirm(candidate: Candidate, vote: Vote){
    candidate.addVote(vote);
    this.voteCust.emit(candidate);
  }

}