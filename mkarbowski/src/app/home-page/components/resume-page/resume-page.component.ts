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
        'webflow',
        'javascript',
        'html',
        'css',
        'figma',
        'angular',
        'ngrx',
        'ionic',
        'react',
        'redux',
        'node.js',
        'git',
        'python',
      ]
    },
    {
      category: 'experience',
      data: [
        {
          company: 'a.team',
          location: 'remote',
          title: 'contract frontend & webflow developer',
          dates: 'dec 2021 - present',
          bullets: [
            'frontend developer & webflow developer, landing page creation and webflow integration with a.team api'
          ]
        },
        {
          company: 'life school labs',
          location: 'remote',
          title: 'contract frontend & webflow developer',
          dates: 'july 2021 - dec 2021',
          bullets: [
            'lead frontend developer, consultant, and webflow developer. landing page creation and asset organization, google ads testing and analytics.'
          ]
        },
        {
          company: 'metapixel llc',
          location: 'remote',
          title: 'contract software developer',
          dates: 'feb 2021 - jul 2021',
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
        'ux / ui design'
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
