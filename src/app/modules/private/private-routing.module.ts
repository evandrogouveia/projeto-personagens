import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { ListarPersonagensComponent } from './listar-personagens/listar-personagens.component';
import { DetalhesPersonagemComponent } from './detalhes-personagem/detalhes-personagem.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent, children: [
      {
        path: 'personagens', component: ListarPersonagensComponent
      },
      {
        path: 'personagens/:id', component: DetalhesPersonagemComponent
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'personagens'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
