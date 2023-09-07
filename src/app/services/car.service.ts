import { Observable, of } from 'rxjs';

import { Car } from '../car';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  private apiUrl = 'http://localhost:9001/cars';
  cars: Car[] = [];

  constructor(private http: HttpClient) { }
  
  getCarsList(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}`);
  }

  createCar(car: Car): Observable<Object> {
    return this.http.post<{ car1: Car }>(`${this.apiUrl}/add`, car);
  }
  
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }
  
  updateCar(id: number, car: Car): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, car);
  }
  
  deleteCar(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
