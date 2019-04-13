import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

equipo:any[] = [
  {
    nombre: 'Ignacio',
    especialidad: 'HTML',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi tempore ratione ex nesciunt, fuga ipsam quas consectetur debitis. Sed atque illum hic! Odit ullam cum debitis facilis dicta enim'
  },
  {
    nombre: 'Chris',
    especialidad: 'CSS',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi tempore ratione ex nesciunt, fuga ipsam quas consectetur debitis. Sed atque illum hic! Odit ullam cum debitis facilis dicta enim'
  },
  {
    nombre: 'Leo',
    especialidad: 'JS',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi tempore ratione ex nesciunt, fuga ipsam quas consectetur debitis. Sed atque illum hic! Odit ullam cum debitis facilis dicta enim'
  },
]

  constructor() { 
    console.log("funcionando servicio")
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerIndividual(i){
    return this.equipo[i]
  }
}
