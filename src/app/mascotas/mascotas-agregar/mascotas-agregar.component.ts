import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MascotasService } from '../mascotas.service';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {

  constructor(private fb: FormBuilder, private mascotasService: MascotasService, private router: Router ) { }

    profileForm = this.fb.group({
      nombre: ['',  [Validators.required, Validators.pattern('[a-zA-Z]{2,20}')]],
      tipo: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      descripcion: ['', Validators.required]
      });
      title = 'sweetAlert';

      resetForm() {
        this.profileForm.reset();

      }
       cancelForm() {
          this.router.navigate(['./mascotas-listar']);

       }
      onSubmit() {

        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: false,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Your pet has been saved'
        })

        this.mascotasService.addMascota(this.profileForm.value).subscribe(data => {
          this.router.navigate(['./mascotas-listar']);
          console.log(data);
    });

      }

  ngOnInit() {

  }

}
