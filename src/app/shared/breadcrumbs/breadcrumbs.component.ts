import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  titulo:string;
  descrip:string;

  constructor(public router:Router,
              private meta:Meta) {
    this.getDataRoute()
    .subscribe( data =>{
       if(data.titulo){
         this.titulo = data.titulo;
         this.descrip = data.descrip;
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
  // getDataRoute(){
  //   return this.router.events.pipe(
  //       filter((e: any) => e instanceof RoutesRecognized),
  //       pairwise()
  //     )  .subscribe((e: any) => {
    //     console.log(e[0].urlAfterRedirects); //previous url
    // });
  //   }

}
