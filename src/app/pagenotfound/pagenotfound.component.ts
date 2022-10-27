import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  @Input() hideNav: any;

  constructor() { 
    alert("haha it is")
    // if(!hidenav)
    
  }

  ngOnInit(): void {
  }

}
