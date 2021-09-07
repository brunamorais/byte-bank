import { Transferencia } from './../models/transferencia.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Transferencia } from '../models/transferencia.models';

@Injectable({
  providedIn: 'root', // = app.module
})

//posso instancia essa classe em outros construtores
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }
  get transferencias() {
    return this.listaTransferencia;
  }
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }
  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
