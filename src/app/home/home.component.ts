import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public cardwidth = 450;
  public cardheight =250;
  ngOnInit(): void {

    // this.cardwidth = window.innerWidth;
    // this.cardheight = window.innerHeight;
  }
  array = [
    {
    index: 1,
    name:"Python",
    date:"~20 feb 1994",
    country:"Netherland",
    difficulty:"Easy",
    oops:true,
    rate:"17.18%",
    desc:"Python is a high-level, general-purpose programming language. It can be used for various tasks, from data analysis and visualization to web development, prototyping, and automation.",
    img:"../assets/main/python.svg"
  },
  {
    index: 2,
    name:"C",
    date:"~Late 1963",
    country:"U.S.A",
    difficulty:"Medium",
    oops:false,
    rate:"15.08%",
    desc:"C is strongly associated with UNIX, as it was developed to write the UNIX operating system. It is one of the most popular programming language in the world",
    img:"../assets/main/c.png"
   
  },
  {
    index: 3,
    name:"Flutter",
    date:"08 aug 2018",
    country:"Google",
    difficulty:"Easy",
    oops:true,
    rate:"4.6/5",
    desc:"Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia,....",
    img:"../assets/main/flutter.svg"
   
  },
  {
    index: 4,
    name:"Java",
    date:"~ may 1995",
    country:"Sun Microsystem",
    difficulty:"Medium",
    oops:true,
    rate:"11.98%",
    desc:"Java is a proprietary programming language owned by Oracle. Its a high-level, general-purpose programming language, enabling coders to create all sorts of applications with ease.",
    img:"../assets/main/java.svg"
   
  },
  {
    index: 5,
    name:"Angular Js",
    date:"14 sept 2014",
    country:"Google",
    difficulty:"Medium",
    oops:true,
    rate:"4.5/5",
    desc:"Angular is an open-source framework and platform for creating Single Page Applications, written in TypeScript. It is supported and developed by Google.",
    img:"../assets/main/angular.svg"
   
  },
  {
    index: 6,
    name:"Blender",
    date:"13 oct 2002",
    country:"Blender Foundation",
    difficulty:"Medium",
    oops:false,
    rate:"4.5/5",
    desc:"Blender is a free and open-source 3D computer graphics software tool set used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications.....",
    img:"../assets/main/blender.svg"
   
  },
    
  ];

}
