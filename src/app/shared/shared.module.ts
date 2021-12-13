import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
