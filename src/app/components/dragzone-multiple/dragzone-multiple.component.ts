import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item.model';

@Component({
  selector: 'app-dragzone-multiple',
  templateUrl: './dragzone-multiple.component.html',
  styleUrls: ['./dragzone-multiple.component.css']
})
export class DragzoneMultipleComponent implements OnInit {
  archivos:FileItem[]=[];
  elementHover:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  cargarImagenes(){

  }
  limpiarArchivos(){
      this.archivos = [];
  }
}
