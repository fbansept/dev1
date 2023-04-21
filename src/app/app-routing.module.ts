import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './pages/panier/panier.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditProduitComponent } from './pages/edit-produit/edit-produit.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'edit-produit', component: EditProduitComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
