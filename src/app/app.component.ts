import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  alumnForm: FormGroup;
  submitted = false;
  alumnList: Array<{ name: string, email: string }> = [];

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario con controles
    this.alumnForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  onSubmit(): void {
    if (this.alumnForm.valid) {
      // Agregar los datos a la lista
      this.alumnList.push(this.alumnForm.value);
      this.submitted = true;
      // Resetear el formulario para permitir nuevos envíos
      this.alumnForm.reset();
    }
  }
}


