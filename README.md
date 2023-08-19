# PhotoExpressFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Prerequisites
Before you begin, ensure you have the following requirements:

- [Node.js](https://nodejs.org/) installed on your system.
- A running instance of [MySQL Server](https://www.mysql.com/).
- [MySQL Workbench](https://www.mysql.com/products/workbench/) installed to manage the database.

## Setup

1. Clone this repository to your local machine: 
https://github.com/Carlosabogal/Back-End-PhotoExpress
   ```bash
   git clone https://github.com/Carlosabogal/Back-End-PhotoExpress

   cd Back-End-PhotoExpress
   
Install project dependencies:

npm install
npm install @angular/common
npm install sweetalert2
npm install -g @angular/cli

Create the database and required table in MySQL Workbench:

CREATE DATABASE PhotoExpressDB;
USE PhotoExpressDB;
  ```
CREATE TABLE Events (
    Id INT NOT NULL AUTO_INCREMENT,
    InstitucionSuperior VARCHAR(255),
    DireccionInstitucion VARCHAR(255),
    NumeroAlumnos INT,
    HoraInicio DATE,
    ValorServicio DECIMAL,
    PRIMARY KEY (ID)
  ```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


