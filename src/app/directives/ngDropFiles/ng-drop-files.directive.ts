import { Directive, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { FileItem } from 'src/app/models/file-item.model';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() archivos:FileItem[] = [];
  @Output() fileHover:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover',['$event'])
    public onDragEnter(event:any){
      this._prevenirDetener(event);
      this.fileHover.emit(true);
  }
  @HostListener('dragleave',['$event'])
    public onDragLeave(event:any){
      this._prevenirDetener(event);
      this.fileHover.emit(false);
  }
  @HostListener('drop',['$event'])
    public onDrop(event:any){

      const transferencia = this._getTransferencia(event);
      if(!transferencia){
        return;
      }
      this._extraerArchivos(transferencia.files);
      this._prevenirDetener(event);
      this.fileHover.emit(false);
    }
  private _getTransferencia(event:any):any{
    return event.dataTransfer ? event.dataTransfer:event.originalEvent.dataTransfer;
  }
  private _extraerArchivos(archivosLista:FileList){
    for ( let propiedad in Object.getOwnPropertyNames(archivosLista)){
      let archivoTemp = archivosLista[propiedad];
      if(this._archivoListoParaSubir(archivoTemp)){
        let nuevoArchivo = new FileItem(archivoTemp);
        console.log(nuevoArchivo);
        this.archivos.push(nuevoArchivo);
      }
    }
  }

  //Validaciones
  private _archivoListoParaSubir(archivo:File){
    if(!this._archivoDropeado(archivo.name) && this._esMaxSize(archivo.size)){
      return true;
    }
    return false;
  }
  private _prevenirDetener(event:any){
    event.preventDefault();
    event.stopPropagation();
  }
  private _archivoDropeado(nombreArchivo:string):boolean{
    for(const archivo of this.archivos){
      if(archivo.nombreArchivo === nombreArchivo){
        return true;
      }
    }
    return false;
  }
  private _esMaxSize(size:number):boolean{
    return size/1024/1024 <= 50;
  }
  private _esImagen(tipoArchivo:string):boolean{
    return (tipoArchivo === '' || tipoArchivo ===undefined)?false: tipoArchivo.startsWith('image');
  }


}
