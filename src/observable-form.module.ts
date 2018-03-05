import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObservableFormDirective } from './observable-form.directive';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [ObservableFormDirective],
  exports: [ObservableFormDirective]
})
export class ObservableFormModule {}
