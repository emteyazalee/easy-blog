import { Component, OnInit } from '@angular/core';
declare function kuch():void;

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css']
})
export class MazeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  load(){
    console.log("asf");
    // kuch();
  }

}
