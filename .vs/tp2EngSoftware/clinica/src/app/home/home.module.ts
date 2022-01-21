import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    QuemsomosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
