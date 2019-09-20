import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import * as searchTicketsActions from '../actions/searchTickets.actions';
import * as uploadTicketsActions from '../actions/uploadTickets.actions';
import { of } from 'rxjs/internal/observable/of';
import { PartePayload } from 'src/app/models/partepayload.model';
import { TicketService } from 'src/app/services';

@Injectable()
export class TicketEffects {
  constructor(private actions$:Actions,
              public _ts:TicketService){}
  @Effect()
  cargarPartes$ = this.actions$
      .pipe(
        ofType(searchTicketsActions.CARGAR_PARTES),
        switchMap(
          (action:searchTicketsActions.CargarPartes) => this._ts.getPartesConFiltro(action.termino, action.offset, action.limit)
          .pipe(
            map((payload:PartePayload) => new searchTicketsActions.CargarPartesSuccess(payload)),
            catchError(error => of(new searchTicketsActions.CargarPartesFail(error))
          )
        )
      )
    );
    @Effect()
    guardarPartes$ = this.actions$
      .pipe(
        ofType(uploadTicketsActions.GUARDAR_PARTES),
        switchMap(
          (action:uploadTicketsActions.GuardarPartes) => this._ts.postNuevoParte(action.descripcion,action.adjunto)
          .pipe(
            map((parteNuevo:any)=> new uploadTicketsActions.GuardarPartesSuccess(parteNuevo)),
            catchError(error => of(new uploadTicketsActions.GuardarPartesFail(error)))
          )
        )
      )

}
