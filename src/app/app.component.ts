import { Component } from '@angular/core';
import { resolve, reject } from 'q';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nicole';
  fullName = 'mia sofia frAile ascencio'

  array = [1,2,4,5,6,7,8,9];

  PI = Math.PI;

  a = 0.235;

  salary = 20000.45;

  hero = {
    name: 'logan',
    alias: 'wolverine',
    age: 50,
    direction:{
      stree:'limonita',
      number:'48'
    }
  }

  valuePromise = new Promise( ( resolve, reject )=>{
    
    setTimeout(()=>resolve('llego la data'), 3500);
  })

  date = '1990-02-12';
  dateknow = new Date();

  video = 'Q5Rv9HU4qcE';

  userName = 'Mario22';

  active:boolean = true;


  
 


}
