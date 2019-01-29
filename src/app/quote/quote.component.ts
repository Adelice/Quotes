import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote( '"Be yourself; everyone else is already taken"','Oscar wilde',0,0),
    new Quote('"Be who you are and say what you feel because those who mind dont matter and those who matter dont mind."','Bernard M. Baruch',0,0 ),
    new Quote('“A room without books is like a body without a soul."','Marcus Tullius Cicero',0,0)
  ]
  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.name=
    quote.description=
  }
  checkDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
      }
  constructor() { }

  ngOnInit() {
  }

}
