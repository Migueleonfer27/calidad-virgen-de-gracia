//Javier
import { Component } from '@angular/core';
import { OpinionService } from '../../opinion/opinion-service.service';

@Component({
  selector: 'app-opinion-form',
  templateUrl: './opinion-form.component.html',
})
export class OpinionFormComponent {
  score: number = 0;
  comment: string = '';

  constructor(private opinionService: OpinionService) {}

  submitForm() {
    const opinion = {
      id: 1, // Cambiar a autoincremental
      score: this.score,
      comment: this.comment,
    };

    this.opinionService.createOpinion(opinion).subscribe(
      (response) => {
        alert('¡Gracias por tu opinión!');
        this.score = 0;
        this.comment = '';
      },
      (error) => {
        alert('Error al enviar tu opinión');
      }
    );
  }
}
