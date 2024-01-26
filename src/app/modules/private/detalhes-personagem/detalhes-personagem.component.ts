import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrivateService } from '../services/private.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-detalhes-personagem',
  templateUrl: './detalhes-personagem.component.html',
  styleUrls: ['./detalhes-personagem.component.scss']
})
export class DetalhesPersonagemComponent implements OnInit {

  charactersDetail$: Observable<any> = of(null);

  constructor(
    private route: ActivatedRoute,
    private privateService: PrivateService
    ){}

  ngOnInit(): void {
      const id: any = this.route.snapshot.paramMap.get('id');
      this.charactersDetail$ = this.privateService.getCharacterDetail(id);
  }

}
