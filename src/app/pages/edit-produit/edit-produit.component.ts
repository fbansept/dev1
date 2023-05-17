import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss'],
})
export class EditProduitComponent {
  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(parametres => console.log(parametres))

  }

  formulaire: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]],
    contenu: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    if (this.formulaire.valid) {

      this.http.post(
        'http://localhost/backend-angular/ajout-article.php',
        this.formulaire.value
      ).subscribe(reponse => this.router.navigateByUrl("/accueil"));

    }
  }
}
