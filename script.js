function Vehicle(brand,model,speed,fuelType)
     {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.fuelType = fuelType;
    }
    
    Vehicle.prototype.accelerate = function(incr)
     {
        this.speed=this.speed+incr;
        console.log(`${this.brand} ${this.model} is press accelerator, current speed:- ${this.speed} km/h`);
    }
    
    Vehicle.prototype.brake = function(decr)
     {
        this.speed=this.speed-decr;
        console.log(`${this.brand} ${this.model} is press break, current speed:- ${this.speed} km/h`);
    }
    
    Vehicle.prototype.refuel = function()
     {
        console.log(`${this.brand} ${this.model} is Refueling.`);
    }
    
   
    function Car(brand, model, speed, fuelType, numberOfWheels)
     {
        Vehicle.call(this, brand, model, speed, fuelType);
        this.numberOfWheels = numberOfWheels;
    }
    Car.prototype = Object.create(Vehicle.prototype);
    Car.prototype.honk = function () {
        console.log(`${this.brand} ${this.model} is Honking.`);
    };
    
   
    function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
      
        Vehicle.call(this, brand, model, speed, fuelType);
        this.numberOfEngines = numberOfEngines;
        this.hasLandingGear = hasLandingGear ;
    }
    
    
    Airplane.prototype = Object.create(Vehicle.prototype);
    
  
    Airplane.prototype.takeOff = function () {
        console.log(`${this.brand} ${this.model} is Take Off.`);
    };
    
   
    let myCar = new Car('Mahindra', 'Thar', 0, 'Diesel', 4);
    let myCar1=new Car('Maruti Suzuki','Swift',0,'Petrol',4)
    let  myAirplane = new Airplane('Recent News', '737', 0, 'jet fuel', 4, true);
    let myAirplane1=new Airplane('Airbus','A3XX',0,'jet fuel',4,true)
    
    
    myCar.accelerate(100);
    myCar.brake(10);
    myCar.refuel();
    myCar.honk();
    console.log("");
    myCar1.accelerate(50);
    myCar1.brake(50);
    myCar1.refuel();
    myCar1.honk();
    console.log("");
    myAirplane.accelerate(80);
    myAirplane.brake(20);
    myAirplane.refuel();
    myAirplane.takeOff();
    console.log("");
    myAirplane1.accelerate(120);
    myAirplane1.brake(20);
    myAirplane1.refuel();
    myAirplane1.takeOff();