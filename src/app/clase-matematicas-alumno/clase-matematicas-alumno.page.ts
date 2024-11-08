import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el servicio Router

@Component({
  selector: 'app-clase-matematicas-alumno',
  templateUrl: './clase-matematicas-alumno.page.html',
  styleUrls: ['./clase-matematicas-alumno.page.scss'],
})
export class ClaseMatematicasAlumnoPage {

  dias: any[] = [];  // Lista de días

  // Inyectamos el Router en el constructor
  constructor(private router: Router) {}

  // Función para volver a la página de login
  volverA() {
    this.router.navigate(['/login-alumno']); // Redirige a la página de login-alumno
  }
  
  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit() {
    this.generarDias();  // Generamos los días cuando el componente se inicializa
  }

  // Método para generar los 30 días
  generarDias() {
    const fechaInicio = new Date();  // Fecha de inicio (hoy)
    const faltasProbabilidad = 0.35;  // 35% de probabilidad de faltar (puedes ajustarlo si deseas más/menos faltas)

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
}
