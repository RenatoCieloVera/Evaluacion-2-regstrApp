import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importamos Router
import { ApiService } from '../services/api.service'; // Asegúrate de que ApiService esté correctamente importado

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage {
  username: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController, 
    private router: Router,
    private apiService: ApiService // Inyectamos el ApiService para obtener los datos de la API
  ) {}

  // Método para validar las credenciales
  async login() {
    try {
      // Obtenemos los alumnos desde la API
      this.apiService.getAlumnos().subscribe((alumnos: any[]) => {
        // Buscamos si el alumno existe con las credenciales ingresadas
        const alumnoValido = alumnos.find(
          (alumno) => alumno.usuario === this.username && alumno.contrasena === this.password
        );

        if (alumnoValido) {
          // Si es un alumno válido
          this.showAlert('Bienvenido Alumno', `Ingreso exitoso como ${this.username}`);
          this.router.navigate(['/clase-matematicas-alumno']);
        } else {
          // Si las credenciales no son válidas
          this.showAlert('Error', 'Usuario o contraseña incorrectos');
        }
      });
    } catch (error) {
      // Si hay un error al hacer la petición
      this.showAlert('Error', 'Hubo un problema al verificar las credenciales');
    }
  }

  // Método para mostrar una alerta
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  restA() {
    this.router.navigate(['/restaurar-pass']);  // Redirigir a la página de restauración de contraseña
  }
}