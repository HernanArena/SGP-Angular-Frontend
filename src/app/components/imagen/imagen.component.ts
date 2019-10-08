import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  imagenSubir:File;
  imagenTemp:string;
  noimagen:string = '../assets/images/images.png';
  @Output() imagen:any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  cargarImagen(evento){
    console.log(evento);

  }
  seleccionImagen(archivo:File){
    console.log(archivo);
    if(!archivo){
      this.imagenSubir =  null;
      return;
    }
    if(archivo.type.indexOf('image')<0){
      // swal('Solo Imagenes','El archivo seleccionado debe ser una imagen','error');
      this.imagenSubir =  null;
      return;
    }
    this.imagenSubir =  archivo;
    this.imagen.emit(archivo);

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result.toString();
  }
}
