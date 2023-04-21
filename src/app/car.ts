export class Car {
    id: number;
    vin: string;
    year: number;
    brand: string;
    color: string;
    price: number;
  
    constructor(id: number=1, vin: string="", year: number=0, brand: string="", color: string="", price: number=0) {
      this.id = id;
      this.vin = vin;
      this.year = year;
      this.brand = brand;
      this.color = color;
      this.price = price;
    }
  }
  