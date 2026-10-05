class Patient {
    constructor(
        private id: string,
        private name: string,
        private age: number
    ) {}

    showInfo(): string {
        return `ผู้ป่วย รหัส - ${this.id} ชื่อ - ${this.name} อายุ - ${this.age}`;
    }
}

class Doctor {
    constructor(
        private id: string,
        private name: string,
        private specialty: string
    ) {}

    showInfo(): string {
        return `แพทย์ รหัส - ${this.id} ชื่อ - ${this.name} ความเชี่ยวชาญ - ${this.specialty}`;
    }

    examine(patient: Patient): void {
        console.log(`${this.showInfo()} ตรวจผู้ป่วย ${patient.showInfo()}`);
    }
    diagnose(patient: Patient):void{
        console.log(`แพทย์ ${this.name} วินิฉัย ${patient.showInfo}เป็นโรค ${this.diagnose}`);
    }
    calculateTreatmentCost(patient: Patient,free : number medication : number ){
        console.log(`แพทย์ ${this.name} รักษา ${patient.showInfo} \nต่ารักษา ${free}ค่ายา ${medication}บาท`);
        console.log(`รวม${free + medication} บาท`);
    }
}

const p1 = new Patient("P001", "แก้วตา", 23);
const p2 = new Patient("P002", "ดวงใจ", 12);

const d1 = new Doctor("D0001", "DD", "หัวใจ");
const d2 = new Doctor("D0002", "AAA", "กระดูก");

d1.examine(p1);
d1.examine(p2);
d2.examine(p1);
d2.examine(p2);
d1.diagnose(p1,"หัวใจเต้นสามช่า")
d1.calculateTreatmentCost(d1,500,500);