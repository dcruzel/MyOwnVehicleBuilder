// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle{

  // Declares properties of the Motorbike class
  // The properties include vin, color, make, model, year, weight, top speed, and wheels
  // The types are as follows: vin (string), color (string), make (string), model (string), 
  // year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string; 
  color: string; 
  make: string;
  model: string; 
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // The constructor accepts the properties of the Motorbike class 
  constructor(
    vin: string, 
    color: string, 
    make: string,
    model: string, 
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ){
    //The constructor calls the constructor of the parent class, Vehicle
    super();
    //The constructor initializes the properties of the Motorbike class
    this.vin=vin; 
    this.color=color; 
    this.make=make;
    this.model=model; 
    this.year=year;
    this.weight=weight;
    this.topSpeed=topSpeed;
    //The constructor checks if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    if(wheels.length!==2){
      this.wheels=[new Wheel(), new Wheel()];
    }else{
      this.wheels=wheels;
    }
  }
  // Implements the wheelie method
  theWheelieMethod():void{
    // The method logs the message "Motorbike [make] [model] is doing a wheelie!"
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    //The method calls the printDetails method of the parent class
    super.printDetails();
    //The method logs the details of the Motorbike
    //The details includes the VIN, make, model, year, weight, top speed, and color
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
