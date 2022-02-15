import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quero-agendar',
  templateUrl: './quero-agendar.component.html',
  styleUrls: ['./quero-agendar.component.scss']
})
export class QueroAgendarComponent implements OnInit {

  public listaEspecialistas: string[] = ['Clinico geral', 'Endocrinologista', 'Oftamologista', 'Pediatra'];

  public especialistaSelecionado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nomeEspecialidade (especialista: number): void {

  }

}
