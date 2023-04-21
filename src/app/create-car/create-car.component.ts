import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../car';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  car: Car = new Car();
  isCreateFlow!: boolean;
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const carId = +this.route.snapshot.paramMap.get('id')!;
    if (carId) {
      this.isCreateFlow = false;
      this.carService.getCarById(carId).subscribe((car) => {
        this.car = car;
      });
    } else {
      this.isCreateFlow = true;
      this.car = new Car();
    }
  }

  saveCar() {
    if (!this.isCreateFlow) {
      this.carService.updateCar(this.car.id, this.car).subscribe((data) => {
        console.log(data);
        this.getToCarList();
      }, (error) => { console.log(error); });
    } else {
      this.carService.createCar(this.car).subscribe((data) => {
        console.log(data);
        this.getToCarList();
      }, (error) => { console.log(error); });
    }
  }

  getToCarList() {
    this.router.navigate(['/cars']);
  }

  onSubmit() {
    console.log(this.car);
    this.saveCar();
  }
}
