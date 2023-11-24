import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

private apiUrl: string = environment.baseUrl + 'online-courses.json';
constructor(private http: HttpClient) { }

getCursos(): Observable<Curso[]> {
  return this.http
    .get<Curso[]>(this.apiUrl);
}

}
