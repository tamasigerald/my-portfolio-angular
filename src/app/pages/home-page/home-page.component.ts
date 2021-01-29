import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faAngular, faReact, faSass, faPhp, faNodeJs, faBootstrap, faGit, faSymfony } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  icons = [
    {name: 'Angular + Typescript + NestJS', icon: faAngular},
    {name: 'React + Redux', icon: faReact},
    {name: 'CSS + Sass + BEM + ITCSS', icon: faSass},
    {name: 'NodeJS', icon: faNodeJs},
    {name: 'Bootsrap', icon: faBootstrap},
    {name: 'Git', icon: faGit},
    {name: 'PHP', icon: faPhp},
    {name: 'Symfony', icon: faSymfony},
    {name: 'SQL + MongoDb', icon: faDatabase},
  ];
  constructor(private titleService: Title) {
    this.titleService.setTitle('Gerald Tamasi');
  }

  ngOnInit(): void {
  }

}
