import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  isAdmin = true;

  listeArticle: any[] = [];

  constructor(private http: HttpClient, public auth: AuthentificationService) {
    this.raffraichir();
  }

  raffraichir() {
    this.http
      .get('http://localhost/backend-angular/liste-articles.php')
      .subscribe((resultat: any) => (this.listeArticle = resultat));
  }

  onSuppressionArticle(id: number) {

    const jwt = localStorage.getItem('jwt');

    if(jwt != null) {

      this.http
        .delete(
          'http://localhost/backend-angular/suppression-article.php?id=' + id,
          {headers : {Authorization : jwt}}
        )
        .subscribe((reponse) => this.raffraichir());
    }
  }
}
