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
export class Coisir {

  data: any;
  user: any;
  coisir: any;
  db: any;
  remote: any;
  post: any;
  uid: any;

  constructor(public http: Http) {
    this.data = null;
  }

  init(details){
    this.db = new PouchDB('coisir');
    this.user = details.userDBs.supertest;
    
    //might cause a problem
    this.remote = details.userDBs.supertest;
 
    let options = {
      live: true,
      retry: true,
      continuous: true
    };
 
    this.db.sync(this.remote, {
      live: true
    }).on('change', function (change) {
      console.log(change);
    }).on('error', function (err) {
      console.log(err);
    });
 
    console.log(this.db);
  }

  ionViewDidLoad(){
    this.db.allDocs({
 
      include_docs: true

    }).then((result) => {

      console.log(result);
    });
  }

  logout(){
 
    this.data = null;
  }

  getPosts(){

    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.db.allDocs({
 
        include_docs: true
 
      }).then((result) => {
 
        this.data = [];
 
        let docs = result.rows.map((row) => {

        this.data.push(row.doc);
          
        });
 
        resolve(this.data);
 
        this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
          this.handleChange(change);
        });
 
      }).catch((error) => {
 
        console.log(error);
 
      });
 
    });

    }

    createPost(post){
        this.db.post(post);
    }

    updatePost(post){
      this.db.put(post).catch((err) => {
        console.log(err);
      });
    }

    deletePost(post){
      this.db.remove(post).catch((err) => {
        console.log(err);
      });
    }

    handleChange(change){
 
      let changedDoc = null;
      let changedIndex = null;
   
      this.data.forEach((doc, index) => {
   
        if(doc._id === change.id){
          changedDoc = doc;
          changedIndex = index;
        }
   
      });
   
      //A document was deleted
      if(change.deleted){
        this.data.splice(changedIndex, 1);
      }
      else {
   
        //A document was updated
        if(changedDoc){
          this.data[changedIndex] = change.doc;
        }
   
        //A document was added
        else {
          this.data.push(change.doc);
        }
   
      }
   
    }

}
