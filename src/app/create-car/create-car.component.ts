import { Car } from '../car';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  car: Car = new Car();
  constructor(private carService: CarService, private router: Router) {

  }
  ngOnInit(): void {

  }
  saveCar() {
    this.carService.createCar(this.car).subscribe((data) => {
      console.log(data);
      this.getToCarList();
    },
      (error) => { console.log(error) })
  }
  getToCarList() {
    this.router.navigate(['/cars']);
  }
  onSubmit() {
    console.log(this.car);
    this.saveCar();
  }
}
