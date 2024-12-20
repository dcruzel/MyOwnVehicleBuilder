// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  // The properties include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // The types are as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), 
  // topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  //Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[], 
    towingCapacity: number,
  ) {
    //The constructor calls the constructor of the parent class, Vehicle
    super();
    //The constructor initializes the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    //The constructor checks if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(0, ""), new Wheel(0, ""), new Wheel(0, ""), new Wheel(0, "")];
    } else {
      this.wheels = wheels;
    }
  }
  // TODO: Implement the tow method from the AbleToTow interface
  tow (vehicle: Motorbike | Car): void {
    let towWeight=0;
    //Get the make an model of the vehicle if it exists
    if (vehicle.make){
      towWeight=vehicle.weight;
      //Check if the vehicle's weight is less than or equal to the truck's towing capacity
      //If it is, log that the vehicle is being towed
      //If it is not, log that the vehicle is too heavy to be towed
      if(towWeight < this.towingCapacity){
        console.log(`${vehicle.make} is being towed.`);
      }else{
        console.log(`${vehicle.make} is too heavy to be towed.`);
      }
    }
  }

  // Overrides the printDetails method from the Vehicle class
  override printDetails(): void {
    // The method calls the printDetails method of the parent class
    super.printDetails();
    // The method logs the details of the Truck
    // The details include the VIN, make, model, year, weight, 
    // top speed, color, and towing capacity
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}

// Export the Truck class as the default export
export default Truck;
