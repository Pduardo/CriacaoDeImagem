import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Child1Component } from './child1/child1.component';


@NgModule({
  declarations: [
    Child1Component
  ],
  imports: [
    CommonModule,
    Modulo1RoutingModule,
    
  ]
})
export class Modulo1Module { }
