import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElectionComponent } from './election/election.component';
import { CandidateComponent } from './election/candidate/candidate.component';
import { VoteComponent } from './election/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectionComponent,
    CandidateComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
