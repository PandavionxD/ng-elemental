import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Nicolas'
  age:number = 18
  imagen:string = 'https://www.google.com.pe/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fes%2Ficono%2Fmacho-hombre-la-gente-persona-avatar-blanco-el-tono-de-la%2F159363&psig=AOvVaw0fJZiYZpY8LWvl8kYToON5&ust=1645411235586000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCR-dagjfYCFQAAAAAdAAAAABAD'
  habilitar:boolean = true
  person={
    name:'Nicolas',
    age:18,
    imagen:'https://www.google.com.pe/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fes%2Ficono%2Fmacho-hombre-la-gente-persona-avatar-blanco-el-tono-de-la%2F159363&psig=AOvVaw0fJZiYZpY8LWvl8kYToON5&ust=1645411235586000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCR-dagjfYCFQAAAAAdAAAAABAD'
  }

  personas:string[]=[
    'Juan','Carlos','Alex','Esteban'
  ]
  pers01:string =''

  products:Product[] = [
    {
      imagen:'./assets/img/bicicleta.jpg',
      precio:20,
      descripcion:'bicicleta'
    },{
      imagen:'./assets/img/juguete_mario.jpg',
      precio:20,
      descripcion:'juguete mario bross'
    },{
      imagen:'./assets/img/lampara.jpg',
      precio:20,
      descripcion:'lampara',
      sector:'Escritorio'
    },{
      imagen:'./assets/img/laptop.jpg',
      precio:20,
      descripcion:'laptop'
    },{
      imagen:'./assets/img/lentes_de_sol.jpg',
      precio:20,
      descripcion:'lentes de sol'
    },{
      imagen:'./assets/img/peluche.jpg',
      precio:20,
      descripcion:'peluche'
    }
  ]
  forma={
    ancho:100,
    alto:100,
    color:'red'
  }

  registro={
    nombre:'',
    email:'',
    Password:''
  }

  // METODOS
  toogleButton(){
    this.habilitar=!this.habilitar
  }

  agregarEdad(){
    this.person.age+=1
  }
  posicionScroll(event:Event){
    let posicion = <HTMLElement>event.target
    // let posicion1 = event.target as HTMLElement
    console.log(posicion.scrollTop)
  }

  copiar(event:Event){
    let copiar = event.target as HTMLInputElement
    this.person.name = copiar.value
  }

  agregarPersona(){
    this.personas.push(this.pers01)
    this.pers01=''
  }
  eliminar(i:number){
    this.personas.splice(i,1)
  }
  onRegistrer(){
    console.log(this.registro)
  }
}
