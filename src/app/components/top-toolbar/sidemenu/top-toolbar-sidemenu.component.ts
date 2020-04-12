import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';

@Component({
  selector: 'top-toolbar-sidemenu',
  templateUrl: './top-toolbar-sidemenu.component.html',
  styleUrls: ['./top-toolbar-sidemenu.component.scss'],
})
export class TopToolbarSidemenuComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {}

  @ViewChild('ionMenu', {static: false})
  private ionMenu: IonMenu;

  closeMenu() {
    setTimeout( () => {
      this.ionMenu.close();
    }, 300);
  }

  public navigate(url: string) {
    this.navCtrl.navigateRoot(url);
    this.closeMenu();
  }

}
