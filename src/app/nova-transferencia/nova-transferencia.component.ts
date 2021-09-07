import { routes } from './../app-routing.module';
import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{


  //criação de objeto para ação de transferir
  //EventEmitter propaga o dado
  @Output() aoTransferir = new EventEmitter<any>();


  //valores dos inputs
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){

    console.log('Solicitado uma transferencia.');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },

    error => console.error(error))


  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
