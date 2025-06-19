import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';

export interface Elemento {
  id?: number;
  nombre: string;
}

@Injectable({ providedIn: 'root' })
export class DexieService extends Dexie {
  public elementos!: Table<Elemento, number>;

  constructor() {
    super('MiDB');
    this.version(1).stores({ elementos: '++id,nombre' });
  }

  get db() {
    return this;
  }
}
