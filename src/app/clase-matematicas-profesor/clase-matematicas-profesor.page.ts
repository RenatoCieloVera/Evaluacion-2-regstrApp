import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router

@Component({
  selector: 'app-clase-matematicas-profesor',
  templateUrl: './clase-matematicas-profesor.page.html',
  styleUrls: ['./clase-matematicas-profesor.page.scss'],
})
export class ClaseMatematicasProfesorPage {

  dias: any[] = [];  // Lista de días de Damian

  constructor(private router: Router) {}

  ngOnInit() {
    this.generarDias();  // Generar los días al cargar la página
  }

  // Método para generar los 30 días
  generarDias() {
    const fechaInicio = new Date();  // Fecha de inicio (hoy)
    const faltasProbabilidad = 0.35;  // 35% de probabilidad de faltar

    for (let i = 0; i < 30; i++) {
      const fecha = new Date(fechaInicio);  // Copiar la fecha de inicio
      fecha.setDate(fecha.getDate() + i);  // Sumar i días a la fecha de inicio

      // Asignamos aleatoriamente una falta al día
      const falta = Math.random() < faltasProbabilidad;

      // Agregar el día y la falta a la lista
      this.dias.push({
        fecha: fecha,
        falta: falta
      });
    }
  }

  // Método para marcar al alumno como presente
  marcarAsistio(dia: any) {
    dia.falta = false;  // Cambiamos el estado de "falta" a "asistió"
  }

  // Método para marcar al alumno como ausente
  marcarFalta(dia: any) {
    dia.falta = true;  // Cambiamos el estado de "asistió" a "falta"
  }

  // Método para navegar de vuelta al login
  volverA() {
    this.router.navigate(['/login-alumno']);  // Redirigir a la página de login-alumno
  }
}
