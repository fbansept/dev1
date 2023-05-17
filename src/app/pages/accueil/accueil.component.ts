import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  isAdmin = true;

  listeArticle: any[] = [];

  constructor(private http: HttpClient) {
    this.raffraichir();
  }

  raffraichir() {
    this.http
      .get('http://localhost/backend-angular/liste-articles.php')
      .subscribe((resultat: any) => (this.listeArticle = resultat));
  }

  onSuppressionArticle(id: number) {
    this.http
      .delete(
        'http://localhost/backend-angular/suppression-article.php?id=' + id
      )
      .subscribe((reponse) => this.raffraichir());
  }
}
