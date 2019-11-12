import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

    profileForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      edad: ['', Validators.required],
      descripcion: ['', Validators.required]
      })

      onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);

        console.log(this.profileForm.value)
      }

  // constructor() { }

  ngOnInit() {

  }

}
