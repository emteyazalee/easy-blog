import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  array = [

    {
    real :true,
    name:"Python",
    desc:"All available Blog_post regarding python",
    img:"../assets/home_images/python.png"
  },
  {name:"C-Programming",
    desc:"All relaA FD",
    img:"../assets/home_images/python.png",
    real :false,

  },
  {name:"j",
    desc:"All relaA FD",
    img:"../assets/home_images/python.png",
    real :true,

  },
  {name:"C-Programming",
    desc:"All relaA FD",
    img:"../assets/home_images/python.png",
    real :false,

  },
  {name:"C-Programming",
    desc:"All relaA FD",
    img:"../assets/home_images/python.png",
    real :true,

  },
  {name:"C-Programming",
    desc:"All relaA FD",
    img:"../assets/home_images/python.png",
    real :false,

  }
    
  ];

}
