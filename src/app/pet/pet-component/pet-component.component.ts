import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Animal {
  id: number;
  nome: string;
  raca: string;
  adotado: boolean;
}

@Component({
  selector: 'app-pet-component',
  templateUrl: './pet-component.component.html',
  styleUrls: ['./pet-component.component.css'],
  providers: [PetService],
})
export class PetComponentComponent implements OnInit {
  form!: FormGroup;
  animais: Animal[] = [];
  animaisAdotados: Animal[] = [];
  mostrarListaAdotados = false;
  animaisParaAdotar: number[] = [];

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
      const novoAnimal: Animal = {
        id: this.form.value.id,
        nome: this.form.value.nome,
        raca: this.form.value.raca,
        adotado: false,
      };

      this.petService.cadastrarAnimal(novoAnimal).subscribe((response: Animal) => {
        console.log('Animal cadastrado:', response);
        this.limparCampos();
        this.listarTodosAnimais();
      });
    }
  }

  atualizarAnimal() {
    if (this.form.valid) {
      const animalAtualizado: Animal = {
        id: this.form.value.id,
        nome: this.form.value.nome,
        raca: this.form.value.raca,
        adotado: false,
      };

      this.petService.atualizarAnimal(animalAtualizado).subscribe((response: Animal) => {
        console.log('Animal atualizado:', response);
        this.limparCampos();
        this.listarTodosAnimais();
      });
    }
  }

  excluirAnimal() {
    if (this.form.valid) {
      const idAnimalExcluir: number = this.form.value.id;

      this.petService.excluirAnimal(idAnimalExcluir).subscribe((response: any) => {
        console.log('Animal excluído:', response);

        // Remove o animal da lista de animais adotados, se existir
        this.animaisAdotados = this.animaisAdotados.filter(animal => animal.id !== idAnimalExcluir);

        // Remove o ID do animal da lista 'animaisParaAdotar'
        this.animaisParaAdotar = this.animaisParaAdotar.filter(id => id !== idAnimalExcluir);

        this.limparCampos();
        this.listarTodosAnimais();
      });
    }
  }

  adotarAnimal(id: number) {
    const animalParaAdotar = this.animais.find(animal => animal.id === id);

    if (animalParaAdotar && !this.animaisParaAdotar.includes(id)) {
      this.petService.adotarAnimal(id).subscribe(
        (response: Animal) => {
          console.log('Animal adotado:', response);
          const animalIndex = this.animais.findIndex(animal => animal.id === id);

          if (animalIndex !== -1) {
            // Remova o animal da lista 'animais'
            this.animais.splice(animalIndex, 1);

            // Adicione o animal à lista 'animaisAdotados'
            this.animaisAdotados.push(response);

            // Adicione o ID do animal à lista 'animaisParaAdotar'
            this.animaisParaAdotar.push(id);
          } else {
            console.warn('Tentativa de adotar um animal que não existe na lista.');
          }
        },
        (error: any) => {
          console.error('Erro ao adotar animal:', error);
          // Adicione lógica para lidar com o erro conforme necessário.
        }
      );
    } else {
      console.warn('Tentativa de adotar um animal que não existe na lista ou já foi adotado.');
    }
  }

  listarAnimaisAdotados() {
    this.petService.listarAnimaisAdotados().subscribe((response: Animal[]) => {
      this.animaisAdotados = response;
      this.mostrarListaAdotados = true;
    });
  }

  voltarParaAnimaisDisponiveis() {
    this.mostrarListaAdotados = false;
    this.animaisAdotados = [];
  }

  private listarTodosAnimais() {
    this.petService.listarAnimais().subscribe((response: Animal[]) => {
      this.animais = response;
    });
  }

  private limparCampos() {
    this.form.reset();
  }
}
