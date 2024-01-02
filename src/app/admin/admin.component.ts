import { Component, OnInit } from '@angular/core';
import {Livre } from 'src/app/models/Livre';
import { LivresService } from '../services/livres.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  livre: Livre = new Livre();
  livres: Livre[] = [];

  constructor(private livreService: LivresService) {}

  ngOnInit(): void {
    this.getLivres();
  }

  addLivre(): void {
    this.livreService.addLivre(this.livre).subscribe(
      () => {
        console.log('Livre added successfully');
        // Optionally, you can clear the form or take other actions upon successful addition
        this.livre = new Livre();
      },
      (error) => {
        console.error('Error adding livre:', error);
        // Handle error as needed
      }
    );
  }

  getLivres(): void {
    this.livreService.getLivres().subscribe(
      (livres) => {
        this.livres = livres;
        console.log('Livres fetched successfully:', this.livres);
      },
      (error) => {
        console.error('Error fetching livres:', error);
        // Handle error as needed
      }
    );
  }

  viewDetails(id: number): void {
    // Implement logic to view details based on id
    // For example, you can navigate to a details page
  }
}