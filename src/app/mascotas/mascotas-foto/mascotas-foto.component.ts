import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Observable } from 'rxjs';
import { Mascota } from '../mascota';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascotas-foto',
  templateUrl: './mascotas-foto.component.html',
  styleUrls: ['./mascotas-foto.component.css']
})
export class MascotasFotoComponent implements OnInit {
  mascota$: Observable<Mascota>;

  constructor(private mascotasService: MascotasService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
     // tslint:disable-next-line: radix
     const id = parseInt(this.route.snapshot.paramMap.get('id'));

     this.mascota$ = this.mascotasService.getMascota(id);


  }

}
