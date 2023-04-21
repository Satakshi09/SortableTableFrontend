export class Car {
    id: number;
    vin: string;
    year: number;
    brand: string;
    color: string;
    price: number;
  
    constructor(id: number, vin: string, year: number, brand: string, color: string, price: number) {
      this.id = id;
      this.vin = vin;
      this.year = year;
      this.brand = brand;
      this.color = color;
      this.price = price;
    }
  }
  