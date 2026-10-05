class BonusCalculator {
  calculateBonus(salary: number): number {
    if (salary < 20000) {
      return salary * 0.05; 
    } else if (salary < 40000) {
      return salary * 0.08;
    } else {
      return salary * 0.1; 
    }
  }
}

class TaxCalculator {
  calculateTax(income: number): number {
    if (income <= 20000) {
      return 0; 
    } else if (income <= 40000) {
      return income * 0.05; 
    } else {
      return income * 0.1;
    }
  }
}
class Employee {
  name: string;
  basicSalary: number;
  bonusCalculator: BonusCalculator;
  taxCalculator: TaxCalculator;

  constructor(name: string, basicSalary: number) {
    this.name = name;
    this.basicSalary = basicSalary;
    this.bonusCalculator = new BonusCalculator();
    this.taxCalculator = new TaxCalculator();
  }
  calculateGrossSalary(): number {
    const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
    return this.basicSalary + bonus;
  }

  calculateNetSalary(): number {
    const gross = this.calculateGrossSalary();
    const tax = this.taxCalculator.calculateTax(gross);
    return gross - tax;
  }
  printPayslip(): void {
    const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
    const gross = this.calculateGrossSalary();
    const tax = this.taxCalculator.calculateTax(gross);
    const net = this.calculateNetSalary();

    console.log(`Basic Salary of ${this.name}: $ ${this.basicSalary}`);
    console.log(`Bonus: $ ${bonus}`);
    console.log(`Gross Salary: $ ${gross}`);
    console.log(`Tax: $ ${tax}`);
    console.log(`Net Salary: $ ${net}`);
    console.log("--------------------------------------");
  }
}
const apinya = new Employee("Apinya", 30000);
const somchai = new Employee("Somchai", 50000);
console.log("=== Payslip: Employee 1 ===");
apinya.printPayslip();
console.log("=== Payslip: Employee 2 ===");
somchai.printPayslip()