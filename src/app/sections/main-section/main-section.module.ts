import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainSectionRoutingModule } from './main-section-routing.module';

import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainSectionRoutingModule,
    MatCardModule
  ]
})
export class MainSectionModule { }
