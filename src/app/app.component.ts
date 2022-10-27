import { Component } from '@angular/core';

declare function mobilenav():void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-blog';
  constructor(){
    // this.tester()
  }
  mobilenav(){ 
    mobilenav()
  }
  hideNav:boolean=false;
}
