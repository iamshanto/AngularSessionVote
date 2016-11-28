import {Component, OnInit, Input} from '@angular/core';
import {Vote} from "./vote.class";

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() votes: Vote[] = [];

  ngOnInit() {

  }

}
