import { Component, OnInit } from '@angular/core';
import {Candidate} from "./candidate/candidate.class";
import {Vote} from "./vote/vote.class";

@Component({
  selector: 'election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  candidates:Candidate[] = [];
  voteState = {
    minVote: 0,
    maxVote: 0,
    voteInput: false
  };

  constructor() { }

  ngOnInit() {
    this.candidates = [
      new Candidate('A', 'a', [new Vote('me'), new Vote('you')]),
      new Candidate('B', 'b', []),
      new Candidate('C', 'c', []),
      new Candidate('D', 'd', [])
    ];
    this.refreshVoteCount();
  }

  refreshVoteCount(){
    let allCount = [];
    for (let i=0;i<this.candidates.length;i++) {
      allCount.push(this.candidates[i].getVoteCount());
    }

    this.voteState.minVote = Math.min(...allCount);
    this.voteState.maxVote = Math.max(...allCount);
  }

}