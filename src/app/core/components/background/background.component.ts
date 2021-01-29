import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parallax } from './parallax.js';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  href;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-unused-expression
    document.addEventListener('mousemove', parallax);
    this.router.events.subscribe((val) => {
      this.href = this.router.url;
    });
  }

}
