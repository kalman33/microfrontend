import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AccueilComponent } from './accueil.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [
   AccueilComponent
  ]
})
export class AccueilModule {}
