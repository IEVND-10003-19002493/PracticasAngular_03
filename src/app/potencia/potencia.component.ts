import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaSumasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;

  calcular():void{
    this.resultado=0;
    for(let i=0; i<parseInt(this.num2) ;i++){
      this.resultado+=parseInt(this.num1);
    }
  }
}