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

  constructor(private mascotasService: MascotasService ,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

    mascota$: Observable<Mascota>;

    public mascotas: any = {};
                      
    mascotasForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['',  [Validators.required, Validators.pattern('[a-zA-Z]{2,20}')]],
      tipo: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      descripcion: ['', Validators.required],
      foto: ['', Validators.required]

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

    //new
   this.mascotasService.getInfo(id).subscribe(data => {
      this.mascotas = data;
    });

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
      console.table(data)
      this.router.navigate(['./mascotas-listar']);

});

}

}
