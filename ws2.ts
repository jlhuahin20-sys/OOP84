class CPU {
    brand : string ;
    cores : number ;
    constructor(b: string , c : number){
        this.brand = b ;
        this.cores = c ;
    }
    process(): void {
        console.log(`CPU ${this.brand} ${this.cores} cores กำลังประมวลผล`)
    }
    showInfo(): void {
        console.log(`CPU info : Brand = ${this.brand},Cores = ${this.cores}`)
    }
}
class RAM {
    constructor(private capacity : number){
    }
    load(): void {
        console.log(`Ram ${this.capacity} loading data`);
    }
    showInfo(): void {
        console.log(`Capacity = ${this.capacity}`);
    }
}
class Storagae extends RAM{
    constructor(capacity :number ,private type : number){
        super(capacity);
    }
    readData():void{
        console.log(`Storage = ${this.type}`)
    }
    showInfo(): void {
        console.log(`Type  = ${this.type}`)
    }
}
class Computer {
    private cpu : CPU ;
    private ram : RAM ;
    private storage : Storagae ;
    constructor(cpu : string ,cores : number,capacity : number ,type :number){
        this.cpu = new CPU (cpu,cores);
        this.ram = new RAM (capacity);
        this.storage = new Storagae (capacity,type);
    }
    boots (): void {
        this.cpu.process();
        console.log("computer บูทเรียบร้อยแล้ว")
    }
    showComputerInfo(): void{
        console.log("Computer Information")
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}
//const c1 = new Computer ("Intel",32);
//c1.boots();
//c1.showComputerInfo();