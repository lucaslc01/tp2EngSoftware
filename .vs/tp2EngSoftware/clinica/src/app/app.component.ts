import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(){

  }


  homeGaleria(pageName:string):void{
    console.log(this.router)
    this.router.navigate([`${pageName}`])
  }

  login(){

  }

  cadastroEndereco(){

  }

  agendamento(){

  }


}
