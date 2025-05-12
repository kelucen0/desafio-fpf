import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NumberListComponent } from '../number-list/number-list.component';

@Component({
  selector: 'app-number-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    CommonModule,
    NumberListComponent
  ],
  templateUrl: './numbers-form.component.html',
  styleUrl: './numbers-form.component.css'
})
export class NumbersFormComponent implements OnInit {
  numberForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.numberForm = this.fb.group({
      numOne: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      numTwo: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      numThree: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  get num1Control(): FormControl {
    return this.numberForm.get('numOne') as FormControl;
  }
  get num2Control(): FormControl {
    return this.numberForm.get('numTwo') as FormControl;
  }
  get num3Control(): FormControl {
    return this.numberForm.get('numThree') as FormControl;
  }

  numbersProcess() {
    if (this.numberForm.valid) {
      const payload = this.numberForm.value;
      this.http.post<any>('http://localhost:8000/api/process/', payload).subscribe({
        next: () => {
          this.snackBar.open('Dados enviados com sucesso!', 'Fechar', {
            duration: 3000,
            verticalPosition: 'top'
          });
        },
        error: () => {
          this.snackBar.open('Erro ao enviar dados!', 'Fechar', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
      });
    } else {
      console.error('Formulário inválido. Por favor, preencha todos os campos corretamente.');
      this.snackBar.open('Formulário inválido!', 'Fechar', {
        duration: 3000,
        verticalPosition: 'top'
      });
    }
  }
}

