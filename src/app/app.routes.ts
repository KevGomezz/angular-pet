import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{path:'',pathMatch:'full', redirectTo:'pet'},
                                { path: 'pet',
                                loadChildren: () => import('./pet/pet.module').then(m => m.PetModule)}

];

@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
