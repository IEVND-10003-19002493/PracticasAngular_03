import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  nombre: string="";
  boletos: number = 0;
  compradores: number = 0;
  tarjeta: string = "";
  total: number = 0;
  mensajeCompra:  string = "";
  boletosPermitidos: number = 0;


  compra(){
    this.total = 0;
    this.boletosPermitidos = this.boletos / this.compradores;

    if (this.boletosPermitidos > 7) {
      this.mensajeCompra = "Solo es posible comprar 7 boletos por persona";
    }
    else{
      //Compra 2 boletos o menos
      if(this.boletos <= 2){
        if(this.tarjeta == "Si"){
          this.total = (this.boletos * 12) * 0.9
          this.mensajeCompra = "Su total es de: $" + this.total + " para " + this.compradores + " personas";
        }
        else{
          this.total = (this.boletos * 12)
          this.mensajeCompra = "Su total es de: $" + this.total + " para " + this.compradores + " personas";
        }
      }
      //Compra de 3 a 5 
      else if(this.boletos > 2 && this.boletos <= 5){
        if(this.tarjeta == "Si"){
          this.total = ((this.boletos * 12) * 0.9) * 0.9
          this.mensajeCompra = "Su total es de: $" + this.total + " para " + this.compradores + " personas";
        }
        else{
          this.total = (this.boletos * 12) * 0.9
          this.mensajeCompra = "Su total es de: $" + this.total + " para " + this.compradores + " personas";
        }
      }
      //+5 boletos
      else if(this.boletos > 5){
        if(this.tarjeta == "Si"){
          this.total = ((this.boletos * 12) * 0.85) * 0.9
          this.mensajeCompra = "Su total es de: $" + this.total + " para " + this.compradores + " personas";
        }
        else{
          this.total = (this.boletos * 12) * 0.85
          this.mensajeCompra = "Su total es de: $" + this.total + " para " + this.compradores + " personas";
        }
      }
    }
  }

  cancelar(){
    this.nombre = "";
    this.boletos = 0;
    this.compradores = 0;
    this.tarjeta = "";
    this.total = 0;
    this.mensajeCompra = "";
    this.boletosPermitidos = 0;
  }
}
