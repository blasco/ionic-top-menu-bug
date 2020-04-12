import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// import { HideHeaderModule } from 'src/app/directives/hide-header.module';
import { TopToolbarModule } from 'src/app/components/top-toolbar/top-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),

    // HideHeaderModule
    TopToolbarModule

  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}
