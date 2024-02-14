import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetRoutingModule } from './pet-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PetRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class PetModule { }
