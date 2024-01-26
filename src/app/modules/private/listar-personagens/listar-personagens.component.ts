import { Component, OnInit } from '@angular/core';
import { PrivateService } from '../services/private.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-listar-personagens',
  templateUrl: './listar-personagens.component.html',
  styleUrls: ['./listar-personagens.component.scss']
})
export class ListarPersonagensComponent implements OnInit {
  characters$: Observable<any> = of(null)

  constructor(private privateService: PrivateService) {}

  ngOnInit(): void {
      this.characters$ = this.privateService.getCharacters();
  }

}
