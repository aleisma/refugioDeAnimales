import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MascotasService } from '../mascotas.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {

  constructor(private fb: FormBuilder, private mascotasService: MascotasService, private router: Router ) { }

    profileForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      edad: ['', Validators.required],
      descripcion: ['', Validators.required]
      });

      onSubmit() {

        this.mascotasService.addMascota(this.profileForm.value).subscribe(data => {
          this.router.navigate(['./mascotas-listar']);
          console.log("mascota agregada");
    });




      };


  // constructor() { }

  ngOnInit() {

  }

}
