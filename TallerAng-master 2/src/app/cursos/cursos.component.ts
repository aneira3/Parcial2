import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './curso';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
   selectedCurso!: Curso;
    selected = false;
    

  constructor(private cursoService: CursosService) { }

  cursos: Array<Curso> = [];

  getCursos() {
    this.cursoService.getCursos().subscribe(courses => {
      this.cursos = courses;
    });
  }
  ngOnInit() {
    this.getCursos();
  }


  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  getText()
  {
    var contador = 0;
    var resultado = "Los cursos ";
    for (const curso of this.cursos) 
    { contador +=1;
      if(curso.offers_certificate)
      { if (contador != this.cursos.length){
        resultado += curso.id
        resultado += ", "}
        else{resultado += " y "
      resultado += curso.id }
        }
      
    }

    return resultado + " ofrecen certificado.";
  }
 

}
