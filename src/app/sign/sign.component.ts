import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  showAccueil: boolean = false;
  errorMessage: string | null = null;

  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private authService: AuthentificationService, private router: Router) {}

  ngOnInit() {}

  signup(): void {
    const newUser: User = {
      id: 0,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role
    };

    this.authService.signup(newUser).subscribe(
      (response) => {
        console.log('Signup successful', response);
        // Handle successful signup response if needed
      },
      (error) => {
        console.error('Signup error:', error);
        // Handle signup error if needed
      }
    );
  }

  login(loginForm: NgForm): void {
    console.log('User object:', this.user);
    if (!this.user.email || !this.user.password) {
      console.error('Email and password are required for login.');
      // You might also want to show an error message to the user
      return;
    }

    const credentials = {
      id: this.user.id,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role,
    };

    this.authService.signin(credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);

        // Extract role from the response
        const userRole = response?.role;
        console.log('User role:', userRole);

        if (!userRole) {
          this.errorMessage = 'Role information missing';
          return;
        }

        console.log('User role:', userRole);

        switch (userRole.trim().toUpperCase()) {
          case 'MEMBRE':
            console.log('Redirecting to /accueil for MEMBRE');
            this.router.navigate(['/accueil']);
            break;
          case 'BIBLIOTHECAIRE':
            console.log('Redirecting to /accueil for BIBLIOTHECAIRE');
            this.router.navigate(['/accueil']);
            break;
          case 'ADMIN':
            console.log('Redirecting to /adminBoard for ADMIN');
            this.router.navigate(['/adminBoard']);
            break;
          default:
            console.error('Unknown role:', userRole);
            this.errorMessage = 'Invalid role';
            break;
        }

      },
      (error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid email or password';
      }
    );

    loginForm.resetForm();
  }

  showAccueilComponent(): void {
    this.showAccueil = true;
  }
}
