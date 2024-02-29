import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      category: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Enviar los datos del formulario
      console.log(this.contactForm.value);
    } else {
      // El formulario es inválido
    }
  

  // algo asi
    // const url = 'URL_DE_TU_ENDPOINT'; // Reemplaza 'URL_DE_TU_ENDPOINT' con la URL real de tu endpoint
    // const data = {
    //   // Aquí coloca los datos que deseas enviar en formato JSON
    //   clave1: 'valor1',
    //   clave2: 'valor2',
    //   // Otros datos...
    // };

    // this.http.post(url, data)
    //   .subscribe(
    //     response => {
    //       console.log('Respuesta:', response);
    //       // Manejo de la respuesta del servidor
    //     },
    //     error => {
    //       console.error('Error al enviar la solicitud:', error);
    //       // Manejo de errores
    //     }
    //   );
  }
}

