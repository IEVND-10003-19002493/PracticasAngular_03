import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { PotenciaSumasComponent } from './potencia/potencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstudiantesComponent } from './cinepolis/estudiantes/estudiantes.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    PotenciaSumasComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
