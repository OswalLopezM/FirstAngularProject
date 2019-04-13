import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  cursos : String[] = ["Angular","CSS","PHP"]
  animales : Array<any> = [
    {tipo:"Perro", nombre:"Leo", edad: 2},
    {tipo:"Gato", nombre:"Cris", edad: 6},
    {tipo:"Loro", nombre:"Lucho", edad: 7},
    {tipo:"Hamster", nombre:"Dem", edad: 2}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
