import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  data: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.data = null;

  }

  getData(){
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
