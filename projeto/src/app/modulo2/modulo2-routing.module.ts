import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child2Component } from './child2/child2.component';
import { Modulo1Module } from '../modulo1/modulo1.module';

const routes: Routes = [
  {
    path: 'child2', 
    component: Child2Component
  },
  {path: '',  // Caminho base dentro do módulo
    component: Modulo1Module}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }
