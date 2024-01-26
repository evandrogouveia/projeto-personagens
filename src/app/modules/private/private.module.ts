import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { ListarPersonagensComponent } from './listar-personagens/listar-personagens.component';
import { DetalhesPersonagemComponent } from './detalhes-personagem/detalhes-personagem.component';


@NgModule({
  declarations: [
    PrivateComponent,
    ListarPersonagensComponent,
    DetalhesPersonagemComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
