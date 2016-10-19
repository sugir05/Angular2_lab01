"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Products';
        this.prod = {
            id: 1,
            name: 'Windstorm'
        };
        this.prods = [
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
    }
    AppComponent.prototype.onSelect = function (prod) {
        this.selectedProd = prod;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n       <h1>{{title}}</h1>\n      <h2>{{prod.name}} details!</h2>\n      <div><label>id: </label>{{prod.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"prod.name\" placeholder=\"name\">\n      </div>\n      \n      <br>\n      <h2>My Products</h2>\n      <ul class=\"products\">\n        <li *ngFor=\"let prod of prods\" [class.selected]=\"prod === selectedProd\" (click)=\"onSelect(prod)\">\n          <span class=\"badge\">{{prod.id}}</span> {{prod.name}}\n        </li>\n      </ul>\n      <br>\n      \n      <div *ngIf=\"selectedProd\">\n        <h2>{{selectedProd.name}} details!</h2>\n        <div><label>id: </label>{{selectedProd.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"selectedProd.name\" placeholder=\"name\"/>\n        </div>\n      </div>\n      ",
            styles: ["\n            .selected {\n              background-color: #CFD8DC !important;\n              color: white;\n            }\n            .products {\n              margin: 0 0 2em 0;\n              list-style-type: none;\n              padding: 0;\n              width: 15em;\n            }\n            .products li {\n              cursor: pointer;\n              position: relative;\n              left: 0;\n              background-color: #EEE;\n              margin: .5em;\n              padding: .3em 0;\n              height: 1.6em;\n              border-radius: 4px;\n            }\n            .products li.selected:hover {\n              background-color: #BBD8DC !important;\n              color: white;\n            }\n            .products li:hover {\n              color: #607D8B;\n              background-color: #DDD;\n              left: .1em;\n            }\n            .products .text {\n              position: relative;\n              top: -3px;\n            }\n            .products .badge {\n              display: inline-block;\n              font-size: small;\n              color: white;\n              padding: 0.8em 0.7em 0 0.7em;\n              background-color: #607D8B;\n              line-height: 1em;\n              position: relative;\n              left: -1px;\n              top: -4px;\n              height: 1.8em;\n              margin-right: .8em;\n              border-radius: 4px 0 0 4px;\n            }\n          "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map