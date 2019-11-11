import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private baseURL: string = 'http://localhost:8090/mascotas';
  constructor(private httpClient: HttpClient) { }




}
