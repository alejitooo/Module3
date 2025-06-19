import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtegidoComponent } from './componentes/protegido/protegido.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'protegido', component: ProtegidoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
