import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
@Input() quote:Quote;
@Output() isComplete= new EventEmitter<boolean>();
quoteDeleted(complete:boolean){
  this.isComplete.emit(complete)
}
vote(){
  this.quote.upvote++;
  alert("thank you for your voting")
}
voted(){
  this.quote.downvote++;
  alert("thank you for your voting")
}

  constructor() { }

  ngOnInit() {
  }

}
