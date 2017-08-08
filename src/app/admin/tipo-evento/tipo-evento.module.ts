import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoEventoComponent } from './tipo-evento.component';
import { TipoEventoRoutingModule } from './tipo-evento-routing.module';
import { TipoEventoListComponent } from './tipo-evento-list/tipo-evento-list.component';
import { DataTableModule,SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    TipoEventoRoutingModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [TipoEventoComponent, TipoEventoListComponent]
})
export class TipoEventoModule { }
