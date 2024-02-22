import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly API = "https://localhost:7152";

  constructor(
    private http:HttpClient,) { }

  cadastrarAnimal(novoAnimal: any): Observable<any> {
    const cadastrarUrl = `${this.API}/Cadastrar-animal`;
    return this.http.get<any>(cadastrarUrl, novoAnimal);
  }

  listarAnimais(): Observable<any[]> {
    const listarUrl = `${this.API}/Animal/Listar-animais`;
    return this.http.get<any[]>(listarUrl);
  }

  listarAnimaisAdotados(): Observable<any[]> {
    const adotadosUrl = `${this.API}/Listar-animais-adotados`;
    return this.http.get<any[]>(adotadosUrl);
  }

  atualizarAnimal(animal: any): Observable<any> {
    const atualizarUrl = `${this.API}/Atualizar-animal/${animal.id}`;
    return this.http.put<any>(atualizarUrl, animal);
  }

  excluirAnimal(id: number): Observable<any> {
    const excluirUrl = `${this.API}/Excluir-animal/${id}`;
    return this.http.delete<any>(excluirUrl);
  }

  adotarAnimal(id: number): Observable<any> {
    const adotarUrl = `${this.API}/Adotar-animal/${id}`;
    return this.http.put<any>(adotarUrl, null);
  }
}
