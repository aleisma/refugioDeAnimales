import { Component, OnInit } from "@angular/core";
import { MascotasService } from "../mascotas.service";
import { Mascota } from "../mascota";
import { Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-mascotas-listar",
  templateUrl: "./mascotas-listar.component.html",
  styleUrls: ["./mascotas-listar.component.css"]
})
export class MascotasListarComponent implements OnInit {
  constructor(
    private mascotasService: MascotasService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

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
}
