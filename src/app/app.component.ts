import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { PetService } from './pet/services/pet.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule, MatDividerModule, MatIconModule,MatToolbarModule,MatTableModule,HttpClientModule],
  providers:[PetService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pet-angular';
}
