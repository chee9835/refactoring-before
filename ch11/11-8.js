export class Employee {
  // 자바스크립트의 생성자는 private 필드로 선언 불가
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) {
    return new Employee(name, 'E');
  }

  static createManager(name) {
    return new Employee(name, 'M');
  }

  static createSalesman(name) {
    return new Employee(name, 'S');
  }
}

const employee = Employee.createEngineer('coco');
