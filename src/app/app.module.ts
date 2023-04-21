import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PanierComponent } from './pages/panier/panier.component';
import { Page404Component } from './pages/page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EditProduitComponent } from './pages/edit-produit/edit-produit.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PanierComponent,
    Page404Component,
    EditProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
