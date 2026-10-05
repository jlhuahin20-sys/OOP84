class Engine {
    constructor(private type: string) {}

    start(): void {
        console.log(`เครื่องยนต์ ${this.type} เริ่มทำงาน`);
    }

    stop(): void {
        console.log(`เครื่องยนต์ ${this.type} หยุดทำงาน`);
    }
}

class Battery {
    constructor(private capacity: number) {}

    charge(): void {
        console.log(`ขณะนี้แบตเตอรี่มีอยู่ ${this.capacity}%`);

        this.capacity = 100;

        console.log(`ชาร์จแบตเตอรี่เรียบร้อยแล้ว ขณะนี้มีแบตเตอรี่ ${this.capacity}%`);
    }

    showStatus(): void {
        console.log(`ขณะนี้มีแบตเตอรี่อยู่ ${this.capacity}%`);
    }
}

class Car {
    private engine: Engine;
    private battery: Battery;

    constructor(type: string, capacity: number) {
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }

    startCar(): void {
        this.engine.start();
    }

    stopCar(): void {
        this.engine.stop();
    }

    showCarinfo(): void {
        console.log(`ข้อมูลของรถ: เครื่องยนต์ชนิด ${this.engine}`);
        this.battery.showStatus();
    }

    chargeBattery(): void {
        this.battery.charge();
    }
}

const car1 = new Car("BYD", 50);

car1.startCar();
car1.showCarinfo();
car1.chargeBattery();
car1.stopCar();