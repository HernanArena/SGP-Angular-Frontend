import { Component } from '@angular/core';
import { Router, ActivationEnd, RoutesRecognized } from '@angular/router';
import { filter, map, pairwise } from 'rxjs/operators';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  titulo:string;
  pathAnterior:string;
  pathSiguiente:string;
  inicio:string;
  rutaSearch:any[] = [{
                        ruta: "/panel",
                        nombre: 'Panel de consulta'
                      },{
                        ruta: "/busqueda",
                        nombre: 'Búsqueda avanzada'
                      },{
                        ruta: "/resultados",
                        nombre: 'Resultados'
                      },{
                        ruta: "/new-ticket",
                        nombre: 'Alta de nuevo parte'
                      }];
  ruta:any[]=[];
  constructor(public router:Router,
              private meta:Meta) {
                this.ruta = [];

    this.getDataRoute()
    .subscribe( data =>{

       if(data.titulo){
         this.titulo = data.titulo;

         if(this.rutaSearch.findIndex(i => i.nombre === data.titulo)>0){

           if(this.rutaSearch[0].ruta == data.titulo){
             this.ruta = [];
             return
           }
           let position = this.rutaSearch.findIndex(i => i.nombre === data.titulo);

           this.ruta = this.rutaSearch.slice(1,position);
         }
         // console.log(data.titulo);
        const metaTag:MetaDefinition = {
          name: 'Description',
          content: this.titulo
        };
        this.meta.updateTag(metaTag);
       }
    });

  }
  ngOnInit(){
  }
  getDataRoute(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild ==null),
      map((evento:ActivationEnd) => evento.snapshot.data)
    )
  }
  getDataRouteAfterAndBefore(){
    return this.router.events.pipe(
        filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
      )
  }
  home(){
     this.ruta = [];
  }

}
