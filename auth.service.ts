import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private logueado = true;
  estaLogueado() { return this.logueado; }
}
