import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../models/Livre';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  private apiUrl = 'http://localhost:8087/api/v1/auth/adminpage'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.apiUrl}/addlivre`, livre);
  }

  getLivreById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.apiUrl}/affichLivre/${id}`);
  }

  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteLivre/${id}`);
  }

  getLivresByCategorie(categorie: string): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.apiUrl}/byCategorie/${categorie}`);
  }
  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.apiUrl}/getLivres`);
  }
}
