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

  onFilterChanged(filterData: {[key: string]: any}): void {
    const filteredData = this.cars.filter((item: any) => {
      let bool = true;
      Object.keys(filterData).forEach((key: string) => {
        if (item.hasOwnProperty(key) && filterData[key] && !(`${item[key]}`.toLowerCase().includes(`${filterData[key]}`.toLowerCase()) || `${item[key]}`.toUpperCase().includes(`${filterData[key]}`.toUpperCase()))) {
          bool = false;
        }
      });
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
    this.cars.sort((a: Car, b: Car) => {
      if (a[field] < b[field]) {
        return -1 * sortDirection;
      }
      if (a[field] > b[field]) {
        return 1 * sortDirection;
      }
      return 0;
    });
  }  
}