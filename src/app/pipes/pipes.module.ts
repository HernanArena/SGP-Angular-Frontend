import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { SelectedPipe } from './selected.pipe';
import { PasswordPipe } from './password.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    SelectedPipe,
    PasswordPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TruncatePipe,
    SelectedPipe,
    PasswordPipe
  ]
})
export class PipesModule { }
