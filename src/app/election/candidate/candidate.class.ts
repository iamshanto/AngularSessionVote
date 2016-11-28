import {Vote} from "../vote/vote.class";
export class Candidate {
    private _countVote;
    constructor(public name:string, public symbol: string, public votes: Vote[]){
        this._countVote = votes.length;
    }

    addVote(vote: Vote){
        this.votes.push(vote);
        this._countVote++;
    }

    getVoteCount(){
        return this._countVote;
    }
}
