import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from './mascota';




@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private baseURL = 'http://localhost:8090/mascotas';

  constructor(private httpClient: HttpClient) { }

  public mascotas: Array<Mascota> = [];


  public getMascotas() {
    return this.httpClient.get<Mascota[]>(`${this.baseURL}`);
    }

  public addMascota(mascota: Mascota) {
      return this.httpClient.post<Mascota>(`${this.baseURL}`, mascota);
    }

    public updateMascota(mascota: Mascota) {
      return this.httpClient.put<Mascota>(`${this.baseURL}`, mascota);
    }

  public getMascota(id: number) {
      return this.httpClient.get<Mascota>(`${this.baseURL}/${id}`);
    }



    }










