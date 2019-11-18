import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {


  constructor(private mascotasService: MascotasService,
              private fb: FormBuilder
  ) {}
  title = 'sweetAlert';

  profileForm = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    edad: ['', Validators.required],
    descripcion: ['', Validators.required]
  });

  public mascotas: Mascota[] = [];
  mascota$: Observable<Mascota>;

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }

  delete(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      background : '#f7f7f7',
      padding : 0.5,
      width: 320
    }).then((result) => {
      if (result.value) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Your pet has been deleted'
        })

        this.mascotasService.deleteMascota(id).subscribe(data => {

          this.mascotasService
            .getMascota(id)
            .subscribe(info =>
              this.mascotasService
                .getMascotas()
                .subscribe(mas => (this.mascotas = mas))
            );
        });


      }
    })


  }
}
