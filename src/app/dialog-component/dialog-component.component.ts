import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css'],
})
export class DialogComponentComponent {
  @Output() filterOptions = new EventEmitter<{ [key: string]: any }>();

  displayDialog = false;
  title = 'dialogStyling';
  searchText: string = '';

  id: any;
  vin: any;
  year: any;
  brand: any;
  color: any;
  price: any;

  constructor() { }

  ngOnInit() { }

  showDialog(): void {
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
  }

  applyFilter() {
    this.filterOptions.emit({
      id: this.id,
      vin: this.vin,
      year: this.year,
      brand: this.brand,
      color: this.color,
      price: this.price,
    });
    this.hideDialog();
  }
}
