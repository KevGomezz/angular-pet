import { PetService } from './../services/pet.service';
import { Component } from '@angular/core';
import { Pet } from '../model/pet';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pet-component',
  standalone: true,
  imports: [AppMaterialModule,],
  templateUrl: './pet-component.component.html',
  styleUrl: './pet-component.component.css'
})
export class PetComponentComponent
 {


  pet$: Observable<Pet[]>; pets: Pet[]=[];
  displayedColumns = ['id','nome','raca']



constructor(private PetService: PetService ){


this.pet$ = this.PetService.list();
this.PetService.list().subscribe(res=> {
  this.pets = res
})


}


 }
