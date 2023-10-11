import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent  {
  newProduit = new Produit();
  addProduit(){
    console.log(this.newProduit);
    }
}
