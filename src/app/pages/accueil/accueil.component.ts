import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  isAdmin = true;

  listeArticle = [
    {
      nom: 'Deca',
      prix: 42,
      promotion: 15,
      urlImage:
        'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
      description:
        "Le café Arabica est la variété la plus courante de café dans le monde. Il est cultivé principalement en Amérique centrale et en Amérique du Sud, ainsi qu'en Afrique de l'Est. Le café Arabica est souvent considéré comme ayant une saveur plus douce et plus complexe que d'autres variétés de café.",
    },
    {
      nom: 'Expresso',
      promotion: 0,
      prix: 12,
      urlImage:
        'https://www.un-amour-de-cafe.com/files/Blog/shutterstock_135404954.jpg',
      description:
        'Le café Excelsa est une variété moins connue de café qui est principalement cultivée en Asie du Sud-Est. Il a une saveur unique qui est souvent décrite comme étant à la fois douce et acidulée, avec des notes de fruits et de fleurs. Le café Excelsa est souvent utilisé comme ingrédient dans les mélanges de café pour ajouter de la complexité à la saveur.',
    },
    {
      nom: 'Latte',
      prix: 38,
      promotion: 20,
      urlImage:
        'https://img.passeportsante.net/1200x675/2021-05-03/i101986-cafe-nu.webp',
      description:
        "Le café Robusta est une autre variété courante de café qui est principalement cultivée en Afrique et en Asie. Il a une saveur plus amère et plus corsée que le café Arabica, ainsi qu'une teneur en caféine plus élevée.",
    },
    {
      nom: 'Cappuccino',
      promotion: 0,
      prix: 22,
      urlImage:
        'https://media.lactualite.com/2022/09/conv_cafeamer-1200x675.jpg',
      description:
        'Le café Liberica est une variété moins courante de café qui est principalement cultivée en Asie et en Afrique. Il a une saveur distinctive qui est souvent décrite comme étant boisée ou épicée, et est souvent utilisé pour produire des mélanges de café.',
    },
  ];
}
