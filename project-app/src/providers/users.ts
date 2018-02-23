import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import PouchDB from 'pouchdb';
import 'rxjs/add/operator/map';

/*
  Generated class for the Users provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Users {

  data: any;
  users: any;

  constructor(public http: Http) {
    this.data = null;
  }

  init(details){
    
  }

  getUsers(){
    if(this.data){
      return Promise.resolve(this.data);
    }

      return new Promise(resolve => {
        
             this.http.get('http://13.58.176.103:5984/hello-world/_all_docs')
               .map(res => res.json())
               .subscribe(data => {
                 this.data = data;
                 resolve(this.data);
               });
           });
    }

}
