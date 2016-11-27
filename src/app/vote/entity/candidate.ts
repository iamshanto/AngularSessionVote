import {Voter} from "./voter";
export class Candidate {
    private _countVote;
    constructor(public name:string, public symbol: string, public voters: Voter[]){
        this._countVote = voters.length;
    }

    addVote(voter: Voter){
        this.voters.push(voter);
        this._countVote++;
    }

    getVoteCount(){
        return this._countVote;
    }
}
