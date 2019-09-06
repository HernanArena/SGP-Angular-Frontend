import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { SelectedPipe } from './selected.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    SelectedPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TruncatePipe,
    SelectedPipe
  ]
})
export class PipesModule { }
