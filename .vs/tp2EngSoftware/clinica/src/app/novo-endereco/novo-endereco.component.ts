import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { novoEnderecoModel } from '../models/novoEnderecoModel';

@Component({
  selector: 'app-novo-endereco',
  templateUrl: './novo-endereco.component.html',
  styleUrls: ['./novo-endereco.component.scss']
})
export class NovoEnderecoComponent implements OnInit {

  cadastroEndereco!: FormGroup;

  public novoEnderecoModel!: novoEnderecoModel;

  public cep: any;
  public logradouro: any;
  public bairro: any;
  public cidade: any;
  public estado: any;

  validation_messages = {
    'cep': [
      { type: 'required', message: "Obrigatório" }
    ],

  };

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.cadastroEndereco = this.formBuilder.group({
      cep: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      logradouro: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
      estado: new FormControl(null, Validators.required),
    });
  }

  validaCEP(cep: string): boolean{

    let numeros: string = '0123456789';
    let caracter: string = '';

    for (let i: number = 0; i < 9; i++) { // verifica se o cep só contém números
      caracter = cep.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
    }

    if(cep.length != 8) { //verifica tamanho de cep válido
      return false;
    }

    else{
      return true
    }

  }

  submit(){

    this.novoEnderecoModel = Object.assign({}, this.novoEnderecoModel, this.cadastroEndereco.value);

    if(!this.validaCEP(this.cadastroEndereco.value.cep)){
     // this.toast.presentToast(this.translate.instant('AGENDA.MODALS.CADASTRORAPIDO.VALIDATION.CPF'), 'danger');
     console.log("cep invalido")
     console.log(this.cadastroEndereco.value.cep)
    }
    else{

    }

  }


}
