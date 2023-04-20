import { Component, EventEmitter, Output} from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-sort-dialog',
  templateUrl: './sort-dialog.component.html',
  styleUrls: ['./sort-dialog.component.css']
})
export class SortDialogComponent {

  @Output() sortSelected = new EventEmitter<{ field: keyof Car, direction: string }>();

  displayDialog = false;

  showDialog(): void {
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
  }

  fields = [
    { label: 'ID', value: 'id', orderBy: 'id' },
    { label: 'VIN', value: 'vin', orderBy: 'vin' },
    { label: 'Year', value: 'year', orderBy: 'year' },
    { label: 'Brand', value: 'brand', orderBy: 'brand' },
    { label: 'Color', value: 'color', orderBy: 'color' },
    { label: 'Price', value: 'price', orderBy: 'price' }
  ];
  direction = 'asc';
  selectedField = this.fields[0];
  
  orderOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' }
  ];
  selectedOrder = 'asc';

  applySort() {
    const selectedField = this.fields.find(field => field.value === this.selectedField?.value);
    if (selectedField) {
      this.sortSelected.emit({ field: selectedField.orderBy as keyof Car, direction: this.direction });
    }
    
    this.hideDialog();
  }
}
