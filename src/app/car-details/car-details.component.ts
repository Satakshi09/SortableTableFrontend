import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  id: number = 0;
  car: Car = new Car(1, '', 0, '', '', 0);

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carService.getCarById(this.id).subscribe(
      data => {
        this.car = data;
      }
    );
  }
}
