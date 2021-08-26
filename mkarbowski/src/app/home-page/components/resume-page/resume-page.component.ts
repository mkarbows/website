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
        'webflow',
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
          company: 'life school labs',
          location: 'remote',
          title: 'contract frontend developer',
          dates: 'july 2021 - present',
          bullets: [
            'lead frontend developer, consultant, and webflow developer'
          ]
        },
        {
          company: 'metapixel llc',
          location: 'remote',
          title: 'contract software developer',
          dates: 'feb 2021 - present',
          bullets: [
            'front end developer contributing to various web and mobile applications with the primary stack being angular, ionic, nestjs, and js/html/css'
          ]
        },
        {
          company: 'arup',
          location: 'los angeles, ca',
          title: 'lead frontend software developer',
          dates: 'aug 2018 - oct 2020',
          bullets: [
            'contributor on speckle open source api',
            'front end developer on metro land value capture tool & digital maturity measure',
            'lead developer on project integrator (pi)',
            'responsible for front end development, technical design & code architecture',
            'ui design prototypes & mockups, user testing sesions, user requirements gathering',
            'task management & sprint planning',
            'client relationships',
            'angular & ngrx expert in the americas region',
            'consultant for digital soltuions & integration for existing/future projects',
            'mentor to junior staff on technical and non-technical topics'
          ]
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
          dates: 'aug 2014 - may 2018',
          bullets: []
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
