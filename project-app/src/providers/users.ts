import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Users provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Users {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getUsers(){
    if(this.data){
      return Promise.resolve(this.data);
    }

      return new Promise(resolve => {
        
             this.http.get('http://localhost:8080/api/users')
               .map(res => res.json())
               .subscribe(data => {
                 this.data = data;
                 resolve(this.data);
               });
           });
    }

}
