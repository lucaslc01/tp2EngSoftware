import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { NovoEnderecoComponent } from './novo-endereco/novo-endereco.component';
import { QueroAgendarComponent } from './quero-agendar/quero-agendar.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'quemsomos', component : QuemsomosComponent},
  {path:'novoEndereco', component: NovoEnderecoComponent},
  {path:'queroAgendar', component: QueroAgendarComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
