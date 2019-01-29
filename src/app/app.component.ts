import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2019 Inspirational Quotes';
  quotes=[
    new Quote( '"Be yourself; everyone else is already taken"','Oscar wilde',0,0),
    new Quote('"Be who you are and say what you feel because those who mind dont matter and those who matter dont mind."','Bernard M. Baruch',0,0 ),
    new Quote('“A room without books is like a body without a soul."','Marcus Tullius Cicero',0,0)
  ]
 
    
  
}
