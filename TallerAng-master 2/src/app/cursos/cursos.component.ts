import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './curso';

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
 

}
