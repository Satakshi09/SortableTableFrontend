import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { SortDialogComponent } from '../sort-dialog/sort-dialog.component';
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {

  data: any;
  cols: any[] = [
    { field: 'id', header: 'ID' },
    { field: 'vin', header: 'VIN' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'price', header: 'Price' },
  ];
  first = 0;
  idFilterText: any;
  vinFilterText: any;
  yearFilterText: any;
  brandFilterText: any;
  colorFilterText: any;
  filteredData: any;
  priceFilterText: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('http://localhost:9001/cars').subscribe(
      (data: any) => {
        this.data = data.slice(0, 50);
        console.log(this.data);
      }
    );
  }
  onFilterChanged(filterData: { id: any, vin: any, year: any, brand: any, color: any, price: any }): void {
    const filteredData = this.data.filter((item: any) => {
      let bool = true;
      if (filterData.id && typeof item.id === 'string' && !(item.id.toLowerCase().includes(filterData.id.toLowerCase()) || item.id.toUpperCase().includes(filterData.id.toUpperCase()))) {
        bool = false;
      }
      if (filterData.vin && typeof item.vin === 'string' && !(item.vin.toLowerCase().includes(filterData.vin.toLowerCase()) || item.vin.toUpperCase().includes(filterData.vin.toUpperCase()))) {
        bool = false;
      }
      if (filterData.year && typeof item.year === 'string' && !(item.year.toLowerCase().includes(filterData.year.toLowerCase()) || item.year.toUpperCase().includes(filterData.year.toUpperCase()))) {
        bool = false;
      }
      if (filterData.brand && typeof item.brand === 'string' && !(item.brand.toLowerCase().includes(filterData.brand.toLowerCase()) || item.brand.toUpperCase().includes(filterData.brand.toUpperCase()))) {
        bool = false;
      }
      if (filterData.color && typeof item.color === 'string' && !(item.color.toLowerCase().includes(filterData.color.toLowerCase()) || item.color.toUpperCase().includes(filterData.color.toUpperCase()))) {
        bool = false;
      }
      if (filterData.price && typeof item.price === 'string' && !(item.price.toLowerCase().includes(filterData.price.toLowerCase()) || item.price.toUpperCase().includes(filterData.price.toUpperCase()))) {
        bool = false;
      }
      return bool;
    });
    this.data = filteredData;
  }

  onSortChanged(event: { field: string, direction: string }) {
    const { field, direction } = event;
    let sortDirection = 1;
    if (direction === 'desc') {
      sortDirection = -1;
    }

    for (let i = 0; i < this.data.length - 1; i++) {
      for (let j = 0; j < this.data.length - i - 1; j++) {
        if (this.data[j][field] > this.data[j + 1][field]) {
          const temp = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = temp;
        }
      }
    }
    if (sortDirection === -1) {
      this.data.reverse();
    }
  }

}