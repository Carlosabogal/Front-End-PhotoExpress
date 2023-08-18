import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  registros: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRegistros();
  }

  getRegistros() {
    const url = 'http://localhost:5242/api/register/get';
    this.http.get<any[]>(url)
      .subscribe(
        registros => {
          this.registros = registros;
        },
        error => {
          console.error('Error getting records:', error);
        }
      );
  }
}
