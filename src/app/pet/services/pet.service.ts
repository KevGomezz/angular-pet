import { Pet } from './../model/pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly API = "https://localhost:7152/Animal/Listar-animais";

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Pet[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(pets => console.log(pets))
      );
  }
}
