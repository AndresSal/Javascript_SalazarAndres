import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-menu-inicial',
  templateUrl: './item-menu-inicial.component.html',
  styleUrls: ['./item-menu-inicial.component.css']
})
export class ItemMenuInicialComponent implements OnInit {

  @Input() nombreItem: string;
  @Input() descripcionItem: string;
  @Input() esSeleccionado: boolean;
  claseItem: string;
  constructor() { }

  ngOnInit() {
  }

  seleccionarItem() {
    if (this.esSeleccionado === true) {
      this.claseItem = 'sa-color-item-sombreado';
    } else {
      this.claseItem = 'sa-color-item-normal';
    }
  }
}
