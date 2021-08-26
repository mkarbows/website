import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  navLinks: any[];
  activeLinkIndex = -1;
  
  constructor(private router: Router) {

    this.navLinks = [
      {
        label: 'about',
        link: './about',
        index: 0
      },
      {
        label: 'resume',
        link: './resume',
        index: 1
      },
      {
        label: 'photography',
        link: './photography',
        index: 2
      },
      {
        label: 'music',
        link: './music',
        index: 2
      },
    ];

  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    })
  }

}
