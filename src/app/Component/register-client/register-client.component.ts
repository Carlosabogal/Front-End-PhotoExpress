import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  registerData = {
    HigherInstitution: '',
    InstitutionAddress: '',
    NumberStudents: 0,
    StartTime: new Date(),
    ServiceCapGown: false
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createRegister() {
    const url = 'http://localhost:5242/api/register/create';
    this.http.post<any>(url, this.registerData)
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

  resetForm() {
    this.registerData = {
      HigherInstitution: '',
      InstitutionAddress: '',
      NumberStudents: 0,
      StartTime: new Date(),
      ServiceCapGown: false
    };
  }
}

