import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetRoutingModule } from './pet-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PetComponentComponent } from './pet-component/pet-component.component'; // Adicione esta imp



@NgModule({
  declarations: [
    PetComponentComponent, // Adicione o PetComponent ao array declarations
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
})
export class PetModule {}
