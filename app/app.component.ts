import { Component } from '@angular/core';
import {Product} from "./product";
@Component({
  selector: 'my-app',
  template: `
       <h1>{{title}}</h1>
      <h2>{{prod.name}} details!</h2>
      <div><label>id: </label>{{prod.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="prod.name" placeholder="name">
      </div>
      
      <br>
      <h2>My Products</h2>
      <ul class="products">
        <li *ngFor="let prod of prods" [class.selected]="prod === selectedProd" (click)="onSelect(prod)">
          <span class="badge">{{prod.id}}</span> {{prod.name}}
        </li>
      </ul>
      <br>
      
      <div *ngIf="selectedProd">
        <h2>{{selectedProd.name}} details!</h2>
        <div><label>id: </label>{{selectedProd.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="selectedProd.name" placeholder="name"/>
        </div>
      </div>
      `,

  styles: [`
            .selected {
              background-color: #CFD8DC !important;
              color: white;
            }
            .products {
              margin: 0 0 2em 0;
              list-style-type: none;
              padding: 0;
              width: 15em;
            }
            .products li {
              cursor: pointer;
              position: relative;
              left: 0;
              background-color: #EEE;
              margin: .5em;
              padding: .3em 0;
              height: 1.6em;
              border-radius: 4px;
            }
            .products li.selected:hover {
              background-color: #BBD8DC !important;
              color: white;
            }
            .products li:hover {
              color: #607D8B;
              background-color: #DDD;
              left: .1em;
            }
            .products .text {
              position: relative;
              top: -3px;
            }
            .products .badge {
              display: inline-block;
              font-size: small;
              color: white;
              padding: 0.8em 0.7em 0 0.7em;
              background-color: #607D8B;
              line-height: 1em;
              position: relative;
              left: -1px;
              top: -4px;
              height: 1.8em;
              margin-right: .8em;
              border-radius: 4px 0 0 4px;
            }
          `]

})
export class AppComponent {
    title = 'Products';
    prod : Product={
      id: 1,
      name: 'Windstorm'
    };

    prods: Product[] = [
        { id: 11, name: 'Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ];

    selectedProd;
    onSelect(prod: Product): void {
      this.selectedProd = prod;
    }
}
