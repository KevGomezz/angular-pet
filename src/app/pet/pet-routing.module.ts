import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponentComponent } from './pet-component/pet-component.component';

const routes: Routes = [{path: '', component:PetComponentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
