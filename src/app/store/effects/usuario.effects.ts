import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import * as usuarioActions from '../actions/user.actions';
import * as searchTicketsActions from '../actions/searchTickets.actions';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { of } from 'rxjs/internal/observable/of';
import {Usuario} from '../../models/usuario.model';
import { FinderService } from 'src/app/services/finder/finder.service';
import { Parte } from 'src/app/models/parte.model';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$:Actions,
              public _us:UsuarioService,
              public _fs:FinderService){

  }
  // @Effect()
  // cargarUsuario$ = this.actions$
  //     .pipe(
  //       ofType(usuarioActions.CARGAR_USUARIO),
  //       switchMap(
  //         (action:usuarioActions.CargarUsuario) => this._us.login(action.uid,action.pwd)
  //         .pipe(
  //           map((user:Usuario) => new usuarioActions.CargarUsuarioSuccess(user)),
  //           catchError(error => of(new usuarioActions.CargarUsuarioFail(error))
  //         )
  //       )
  //     )
  //   );
  @Effect()
  cargarPartes$ = this.actions$
      .pipe(
        ofType(searchTicketsActions.CARGAR_PARTES),
        switchMap(
          (action:searchTicketsActions.CargarPartes) => this._fs.recuperarPartes(action.termino)
          .pipe(
            map((parte:Parte[]) => new searchTicketsActions.CargarPartesSuccess(parte)),
            catchError(error => of(new searchTicketsActions.CargarPartesFail(error))
          )
        )
      )
    );


}
