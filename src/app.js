import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();


export class App {
    arra = [];
   getData() {
      this.arra=[];

      httpClient.fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => response.json())
      .then(data => this.arra= data);
   } 
}