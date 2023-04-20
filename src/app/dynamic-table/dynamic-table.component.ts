import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { SortDialogComponent } from '../sort-dialog/sort-dialog.component';
import { CarService } from '../services/car.service';
import { Car } from '../car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit{
  cars: Car[]=[];
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
  constructor(private carService: CarService, private router: Router ) { }
  ngOnInit(): void {
    this.getCars();
  }
  private getCars() {
    this.carService.getCarsList().subscribe((data) => {
      this.cars = data;
      console.log(this.cars);
    });
  }

  carDetails(id: number) {
    this.router.navigate(['car-details', id]);
  }
  updateCar(id: number) {
    this.router.navigate(['update-car', id]);
  }
  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe((data) => {
      console.log(data);
      this.getCars();
    });
  }
  onFilterChanged(filterData: { id: any, vin: any, year: any, brand: any, color: any, price: any }): void {
    const filteredData = this.cars.filter((item: any) => {
      let bool = true;
      if (filterData.id && item.id && !(`${item.id}`.toLowerCase().includes(`${filterData.id}`.toLowerCase()) || `${item.id}`.toUpperCase().includes(`${filterData.id}`.toUpperCase()))) {
        bool = false;
      }
      if (filterData.vin && item.vin && !(`${item.vin}`.toLowerCase().includes(`${filterData.vin}`.toLowerCase()) || `${item.vin}`.toUpperCase().includes(`${filterData.vin}`.toUpperCase()))) {
        bool = false;
      }
      if (filterData.year && item.year && !(`${item.year}`.toLowerCase().includes(`${filterData.year}`.toLowerCase()) || `${item.year}`.toUpperCase().includes(`${filterData.year}`.toUpperCase()))) {
        bool = false;
      }
      if (filterData.brand && item.brand && !(`${item.brand}`.toLowerCase().includes(`${filterData.brand}`.toLowerCase()) || `${item.brand}`.toUpperCase().includes(`${filterData.brand}`.toUpperCase()))) {
        bool = false;
      }
      if (filterData.color && item.color && !(`${item.color}`.toLowerCase().includes(`${filterData.color}`.toLowerCase()) || `${item.color}`.toUpperCase().includes(`${filterData.color}`.toUpperCase()))) {
        bool = false;
      }
      if (filterData.price && item.price && !(`${item.price}`.toLowerCase().includes(`${filterData.price}`.toLowerCase()) || `${item.price}`.toUpperCase().includes(`${filterData.price}`.toUpperCase()))) {
        bool = false;
      }
      return bool;
    });
    this.cars = filteredData;
  }
  

  onSortChanged(event: { field: keyof Car, direction: string }) {
    const { field, direction } = event;
    let sortDirection = 1;
    if (direction === 'desc') {
      sortDirection = -1;
    }

    for (let i = 0; i < this.cars.length - 1; i++) {
      for (let j = 0; j < this.cars.length - i - 1; j++) {
        if (this.cars[j][field] > this.cars[j + 1][field]) {
          const temp = this.cars[j];
          this.cars[j] = this.cars[j + 1];
          this.cars[j + 1] = temp;
        }
      }
    }
    if (sortDirection === -1) {
      this.cars.reverse();
    }
  }
}