import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemsomosComponent } from '../app/quemsomos/quemsomos/quemsomos.component'
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';


const routes: Routes = [
  //{path:'quemsomos', component:QuemsomosComponent},
  {path:'quemsomos', loadChildren:()=>import('./app.module').then(mode=>mode.AppModule)},
  {path:'', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
