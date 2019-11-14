import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Mascota } from '../mascota';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {

  mascota$: Observable<Mascota>;

  constructor(private mascotasService: MascotasService ,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

    mascotasForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      edad: ['', Validators.required],
      descripcion: ['', Validators.required]

    });
    title = 'sweetAlert';

    cancelForm() {
      this.router.navigate(['./mascotas-listar']);
    }


  ngOnInit() {

    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.mascota$ = this.mascotasService.getMascota(id);

    this.mascota$.subscribe(data => this.mascotasForm.setValue(data));
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
      title: 'Your pet has been edited'
    })



    this.mascotasService.updateMascota(this.mascotasForm.value).subscribe(data => {
      this.router.navigate(['./mascotas-listar']);

});

}




}
