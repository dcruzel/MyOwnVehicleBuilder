// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number, tireBrand: string) {
    if(diameter===0){
      this.diameter = 18;
    }else{
      this.diameter = diameter;
    }
    if(tireBrand===""){
      this.tireBrand="GoodYear";
    }else{
      this.tireBrand = tireBrand;
    }
  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
  get getTireBrand(): string {
    return this.tireBrand;
  }
}

// Export the Wheel class
export default Wheel;
