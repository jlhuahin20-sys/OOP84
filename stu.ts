class Student {
    constructor(private name :string ,private faculty : string ){
        getStudentInfo(): string{
            return `นักศึกษา ชื่อ ${this.name } สาชา ${this.faculty}`;
        }
    }
}
class Teacher {
    constructor(private name :string ,private faculty : string ){
        teach(student : Student): void{
            console.log(`อาจารย์ ${this.name}คณะ${this.faculty}สอน ${Student.getstudentInfo}`)
        }
    }
}
const s1 = new Student("Chai","วิทย์คอม");
const s2 = new Student("Aek","sciene");
const t1 = new Teacher("Sommai","วิทย์คอม");
t1.teach(s1);
t1.teach(s2);