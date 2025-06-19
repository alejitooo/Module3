import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { API_URL } from '../tokens/config.token';
import { Store } from '@ngrx/store';
import { agregarElemento } from '../../redux/actions';
import { DexieService } from './dexie.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private api: string,
    private store: Store,
    private dexie: DexieService
  ) {}

  getElementos() {
    return this.http.get(`${this.api}/elementos`);
  }

  agregar(elemento: any) {
    this.http.post(`${this.api}/elementos`, elemento).subscribe(() => {
      this.store.dispatch(agregarElemento({ elemento }));
      this.dexie.db.elementos.add(elemento);
    });
  }
}
