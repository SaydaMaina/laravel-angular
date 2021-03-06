import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Item } from './Item';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http: Http){}
  private headers = new Headers({'Content-Type': 'application/json'});
title = 'SERVICE DE VENTE AUCHAN';
onSubmit(form: NgForm): Promise <Item>{
  return this._http.post('http://127.0.0.1:8000/api/items', JSON.stringify(form.value), {headers: this.headers})
   .toPromise()
           .then(res => res.json().data)
            .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}
}
