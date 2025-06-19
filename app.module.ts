import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { API_URL } from './tokens/config.token';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000' },
    { provide: AuthService, useClass: AuthService },
    { provide: ApiService, useExisting: AuthService }
  ],
  bootstrap: []
})
export class AppModule {}
