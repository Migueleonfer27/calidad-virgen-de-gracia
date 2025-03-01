import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WebSocketService } from '../../../webSocket/web-socket.service';

@Component({
  selector: 'message-form-dialog',
  standalone: false,
  templateUrl: './message-form-dialog.component.html',
  styleUrl: './message-form-dialog.component.css'
})
export class MessageFormDialogComponent {
  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MessageFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.messageForm = this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  send() {
    if (this.messageForm.valid) {
      this.dialogRef.close(this.messageForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onInput(controlName: string) {
    const control = this.messageForm.get(controlName);
    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }
}
