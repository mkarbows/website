import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navLinks = [
    {
      label: 'about',
      path: 'about'
    },
    // {
    //   label: 'spotify',
    //   path: 'spotify'
    // },
    // {
    //   label: 'work',
    //   path: 'work'
    // },
    // {
    //   label: 'art',
    //   path: 'art'
    // },
    // {
    //   label: 'photography',
    //   path: 'photography'
    // }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
