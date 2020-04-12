import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DesktopTopToolbarComponent } from './desktop-top-toolbar/desktop-top-toolbar.component';
import { TopToolbarSidemenuComponent } from './sidemenu/top-toolbar-sidemenu.component';
import { TopToolbarComponent } from './top-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    DesktopTopToolbarComponent,
    TopToolbarSidemenuComponent,
    TopToolbarComponent
  ],
  exports: [
    DesktopTopToolbarComponent,
    TopToolbarSidemenuComponent,
    TopToolbarComponent
  ]
})
export class TopToolbarModule {}
