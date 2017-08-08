import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoEventoComponent } from './tipo-evento.component';
import { TipoEventoListComponent } from './tipo-evento-list/tipo-evento-list.component';

const routes: Routes = [
    {
        path: '', component: TipoEventoComponent,
        children: [
            //{ path: 'newer-cmp', loadChildren: './newer-cmp/newer-cmp.module#NewerCmpModule' },
            { path: '', component: TipoEventoListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoEventoRoutingModule { }
