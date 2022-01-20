import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemsomosComponent } from '../app/quemsomos/quemsomos/quemsomos.component'

const routes: Routes = [
  {path:'quemsomos', component:QuemsomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
