import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import * as searchTicketsActions from '../actions/searchTickets.actions';
import { AuthService } from 'src/app/services';
import { of } from 'rxjs/internal/observable/of';
import { FinderService } from 'src/app/services/finder/finder.service';
import { PartePayload } from 'src/app/models/partepayload.model';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$:Actions,
              public _us:AuthService,
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
  // @Effect()
  // cargarPartes$ = this.actions$
  //     .pipe(
  //       ofType(searchTicketsActions.CARGAR_PARTES),
  //       switchMap(
  //         (action:searchTicketsActions.CargarPartes) => this._fs.recuperarPartes(action.termino, action.offset, action.limit)
  //         .pipe(
  //           map((payload:PartePayload) => new searchTicketsActions.CargarPartesSuccess(payload)),
  //           catchError(error => of(new searchTicketsActions.CargarPartesFail(error))
  //         )
  //       )
  //     )
  //   );

}
