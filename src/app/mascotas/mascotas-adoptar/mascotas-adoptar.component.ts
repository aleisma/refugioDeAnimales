import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascotas-adoptar',
  templateUrl: './mascotas-adoptar.component.html',
  styleUrls: ['./mascotas-adoptar.component.css']
})
export class MascotasAdoptarComponent implements OnInit {
  public mascotaAdoptada: boolean;

  constructor(private mascotasService: MascotasService) {

    this.mascotaAdoptada = false;


  }
  public mascota: any = {};
  public mascotas: Mascota[] = [];

  ngOnInit() {

    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }

  onChange( id: number ) {
    this.mascotasService.getInfo(id).subscribe(data => {
      this.mascota = data;
      console.table(data);
    });

    this.mascotaAdoptada = true;
  }

}
