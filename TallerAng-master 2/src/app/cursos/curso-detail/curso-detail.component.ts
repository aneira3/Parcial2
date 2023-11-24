import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  constructor() { }

  @Input() cursoDetail!: Curso;

  ngOnInit() {
  }

  getCondicional()
  {
    if(this.cursoDetail.offers_certificate){return "Si ofrece certificado"}
    else{return "No ofrece certificado"}
  }

}
