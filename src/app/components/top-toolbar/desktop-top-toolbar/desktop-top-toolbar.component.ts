import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'desktop-top-toolbar',
  templateUrl: './desktop-top-toolbar.component.html',
  styleUrls: ['./desktop-top-toolbar.component.scss'],
})
export class DesktopTopToolbarComponent implements OnInit {

  constructor(
    private navCtrl: NavController, 
  ) { }

  ngOnInit(
  ) {}

  public navigate(url: string) {
    this.navCtrl.navigateRoot(url);
  }

}
