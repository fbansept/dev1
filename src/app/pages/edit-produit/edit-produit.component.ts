import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss'],
})
export class EditProduitComponent {

  constructor(private formBuilder: FormBuilder) { }

  formulaire: FormGroup = this.formBuilder.group({
    nom : ["",[Validators.required]],
    description: ["",[Validators.required, Validators.minLength(10)]]
  })

  onSubmit() {
    console.log('Formulaire envoyé');
  }
}
