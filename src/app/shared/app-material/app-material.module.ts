import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule




@NgModule({
  exports: [MatTableModule,MatCardModule,MatToolbarModule,MatProgressSpinnerModule,FormsModule,ReactiveFormsModule],

})
export class AppMaterialModule { }
