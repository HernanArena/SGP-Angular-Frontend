import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { SelectedPipe } from './selected.pipe';
import { PasswordPipe } from './password.pipe';
import { ExtensionsPipe } from './extensions.pipe';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    SelectedPipe,
    PasswordPipe,
    ExtensionsPipe,
    ImagenPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TruncatePipe,
    SelectedPipe,
    PasswordPipe,
    ExtensionsPipe
  ]
})
export class PipesModule { }
