import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-component',
  templateUrl: './pet-component.component.html',
  styleUrls: ['./pet-component.component.css'],
  providers: [PetService],
})
export class PetComponentComponent implements OnInit {
  form!: FormGroup;
  animais: any[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      raca: new FormControl('', Validators.required),
    });

    this.listarTodosAnimais();
  }

  cadastrarAnimal() {
    if (this.form.valid) {
      const novoAnimal: any = {
        id: this.form.value.id,
        nome: this.form.value.nome,
        raca: this.form.value.raca,
        adotado: false,
      };

      this.petService.cadastrarAnimal(novoAnimal).subscribe((response: any) => {
        console.log('Animal cadastrado:', response);
        this.limparCampos();
        this.listarTodosAnimais();
      });
    }
  }

  atualizarAnimal() {
    if (this.form.valid) {
      const animalAtualizado: any = {
        id: this.form.value.id,
        // Adicione mais campos conforme necessário
        // nome: this.form.value.nome,
        // raca: this.form.value.raca,
      };

      this.petService.atualizarAnimal(animalAtualizado).subscribe((response: any) => {
        console.log('Animal atualizado:', response);
        this.limparCampos();
        this.listarTodosAnimais();
      });
    }
  }

  excluirAnimal() {
    if (this.form.valid) {
      const idAnimalExcluir: any = {
        id: this.form.value.id,
      };

      this.petService.excluirAnimal(idAnimalExcluir).subscribe((response: any) => {
        console.log('Animal excluído:', response);
        this.limparCampos();
        this.listarTodosAnimais();
      });
    }
  }

  adotarAnimal() {
    // Implemente conforme necessário, usando o serviço petService
    // Você pode obter o ID do animal a ser adotado do formulário e enviar uma solicitação para adotar no servidor
  }

  listarAnimaisAdotados() {
    this.petService.listarAnimaisAdotados().subscribe(response => {
      this.animais = response;
    });
  }

  private listarTodosAnimais() {
    this.petService.listarAnimais().subscribe(response => {
      this.animais = response;
    });
  }

  private limparCampos() {
    this.form.reset();
  }
}
