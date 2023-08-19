import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      higherInstitution: ['', Validators.required],
      institutionAddress: ['', Validators.required],
      numberStudents: ['', Validators.required],
      startTime: ['', Validators.required],
      serviceCapGown: [false]
    });
  }

  createRegister() {
    if (this.registerForm.valid) {
      const url = 'http://localhost:5242/api/register/create';
      this.http.post<any>(url, this.registerForm.value)
        .subscribe(
          response =>  {
            console.log('Register created successfully:', response);
          },
          (error: any) => {
            console.error('Error creating register:', error);
            this.resetForm();
          }
        );
    }
  }

  resetForm() {
    this.registerForm.reset();
  }

  showModal(){
    Swal.fire(
      '¡Felicidades!',
      'Su evento fue agendado con éxito.',
      'success'
    )
  }
}
