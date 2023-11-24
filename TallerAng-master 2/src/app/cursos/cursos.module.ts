import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursoDetailComponent],
  exports: [CursosComponent]
})
export class CursosModule { }
