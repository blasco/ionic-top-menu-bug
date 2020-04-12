import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss'],
})
export class TopToolbarComponent implements OnInit {

  constructor(
  ) { }

  @ViewChild('header', {static: false})
  public header: any;

  ngOnInit(
  ) {}

}
