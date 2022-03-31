function Employee(name,designation,YearOfBirth)
{
    this.name=name;
    this.designation=designation;
    this.YearOfBirth=YearOfBirth;
}

Employee.prototype.calculateAge=function(){
    console.log('The current age is:'+(2019-this.YearOfBirth));

}
console.log(Employee.prototype);

let Emp1 = new Employee('Alex','Junior',1995)
console.log(Emp1);
Emp1.calculateAge();

let Emp2 = new Employee('Jan','Junior',1990)
console.log(Emp1);
Emp1.calculateAge();

let Emp3 = new Employee('Annie','Junior HR',1996)
console.log(Emp1);
Emp1.calculateAge();
