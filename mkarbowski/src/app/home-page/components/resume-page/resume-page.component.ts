import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  resume = [
    {
      category: 'stack',
      data: [],
      list: [
        'angular',
        'ngrx',
        'ionic',
        'javascript',
        'html',
        'css',
        'react',
        'react native',
        'redux',
        'nestjs',
        'node.js',
        'git',
        'c#',
        'python',
      ]
    },
    {
      category: 'experience',
      data: [
        {
          company: 'metapixel llc',
          location: 'remote',
          title: 'contract software developer',
          dates: 'feb 2021 - present'
        },
        {
          company: 'arup',
          location: 'los angeles, ca',
          title: 'lead frontend software developer',
          dates: 'aug 2018 - oct 2020'
        }
      ],
      list: []
    },
    {
      category: 'education',
      data: [
        {
          company: 'loyola marymount university',
          location: 'los angeles, ca',
          title: 'bs in computer science',
          dates: 'aug 2014 - may 2018'
        }
      ],
      list: []
    },
    {
      category: 'skills',
      data: [],
      list: [
        'task management',
        'frontend architecture',
        'project management',
        'sprint planning',
        'story boarding',
        'communication',
        'leadership',
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
