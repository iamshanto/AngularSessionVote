import { Component } from '@angular/core';
import {Candidate} from "./vote/entity/candidate";
import {Voter} from "./vote/entity/voter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  candidates:Candidate[] = [];
  maxVote = 0;
  minVote = 0;
  constructor() { }

  ngOnInit() {
    this.candidates = [
      new Candidate('A', 'a', [new Voter('me'), new Voter('you')]),
      new Candidate('B', 'b', []),
      new Candidate('C', 'c', []),
      new Candidate('D', 'd', [])
    ];
    this.refreshVoteCount();
  }

  addVote(candidate: Candidate){
    candidate.addVote(new Voter(null));
    this.refreshVoteCount();
  }

  refreshVoteCount(){
    let allCount = [];
    for (let i=0;i<this.candidates.length;i++) {
      allCount.push(this.candidates[i].getVoteCount());
    }

    this.maxVote = Math.max(...allCount);
    this.minVote = Math.min(...allCount);
  }
}
