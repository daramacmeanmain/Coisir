import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Coisir } from '../../providers/coisir';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(public nav: NavController, public http: Http, public coisirService: Coisir) {
  }

  register(){
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      let users = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      };

      this.http.post('http://localhost:3000/auth/register', JSON.stringify(users), {headers: headers})
        .subscribe(res => {
          this.coisirService.init(res.json());
          this.nav.setRoot(HomePage);
        }, (err) => {
          console.log(err);
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

}
