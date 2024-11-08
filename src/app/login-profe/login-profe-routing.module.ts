import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginProfePage } from './login-profe.page';

const routes: Routes = [
  {
    path: '',
    component: LoginProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginProfePageRoutingModule {}
