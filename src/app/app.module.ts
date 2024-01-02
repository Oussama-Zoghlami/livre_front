import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';

import { HttpClientModule } from '@angular/common/http';





import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    AdminComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
