import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de alumnos
  getAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/alumnos`);
  }

  getProfesores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profesores`);
  }
}
