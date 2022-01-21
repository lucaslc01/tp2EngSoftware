import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  testeRoute() {
    this.router.navigate(['/quemsomos']);
  }

}