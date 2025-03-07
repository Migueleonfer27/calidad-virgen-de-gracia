import { Component, OnInit, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SurveyService } from '../../services/survey.service'
import { Question, SurveyResponse } from '../../interfaces/survey.interface'

@Component({
  selector: 'survey-form',
  standalone: false,
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  questions: (Question & { selectedAnswer?: number, showError: boolean })[] = []
  surveyId: number = 1

  constructor(private surveyService: SurveyService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getQuestions()
  }

  getQuestions(): void {
    this.surveyService.getAllQuestions().subscribe((questions) => {
      this.questions = questions.map(q => ({
        ...q,
        options: q.options || [1, 2, 3, 4, 5],
        selectedAnswer: undefined,
        showError: false
      }))
    })
  }

  submitSurvey(): void {
    let hasErrors = false

    this.questions.forEach(q => {
      if (q.selectedAnswer === undefined) {
        q.showError = true
        hasErrors = true
      } else {
        q.showError = false
      }
    })

    if (hasErrors) {
      return
    }

    const surveyResponses: SurveyResponse[] = this.questions.map(q => ({
      survey_id: this.surveyId,
      question_id: q.id,
      answer: q.selectedAnswer!
    }))

    this.surveyService.submitSurveyResponse(surveyResponses).subscribe(
      serverResponse => {
        console.log('Respuestas enviadas con éxito:', serverResponse)
        this.openConfirmationDialog()
      },
      error => {
        console.error('Error al enviar las respuestas:', error)
        this.openErrorDialog({
          message: 'Ha ocurrido un error al enviar la encuesta. Por favor, inténtelo de nuevo más tarde.',
          status: error.status
        })
      }
    )
  }

  openConfirmationDialog(): void {
    const dialogRef: MatDialogRef<DialogContentComponent> = this.dialog.open(DialogContentComponent, {
      width: '300px',
      disableClose: true
    })

    setTimeout(() => {
      dialogRef.close()
    }, 5000)
  }

  openErrorDialog(data: { message: string, status?: number }): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      data: data
    })

    setTimeout(() => {
      dialogRef.close()
    }, 5000)
  }
}

@Component({
  selector: 'app-dialog-content',
  template: `
    <div class="dialog-content">
      <h2>¡Encuesta enviada!</h2>
      <p>Gracias por tu respuesta.</p>
      <button mat-button (click)="closeDialog()">Cerrar</button>
    </div>
  `,
  styles: [`
    .dialog-content {
      text-align: center
      padding: 20px
    }
    button {
      margin-top: 10px
    }
  `]
})
export class DialogContentComponent {
  constructor(private dialogRef: MatDialogRef<DialogContentComponent>) { }

  closeDialog(): void {
    this.dialogRef.close()
  }
}

@Component({
  selector: 'app-error-dialog',
  template: `
    <div class="dialog-content">
      <h2>Ha ocurrido un error</h2>
      <p>{{ data.message }}</p>
      <p *ngIf="data.status">Código de error: {{ data.status }}</p>
      <button mat-button (click)="closeDialog()">Cerrar</button>
    </div>
  `,
  styles: [`
    .dialog-content {
      text-align: center
      padding: 20px
    }
    h2 {
      color: #d32f2f
      font-size: 20px
    }
    p {
      font-size: 14px
      color: #555
    }
    button {
      margin-top: 10px
      background-color: #d32f2f
      color: white
    }
  `]
})
export class ErrorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, status?: number }
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close()
    }, 5000)
  }

  closeDialog(): void {
    this.dialogRef.close()
  }
}
