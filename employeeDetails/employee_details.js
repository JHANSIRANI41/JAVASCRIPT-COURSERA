const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];
  function displayEmployees()
  {
    const totalemp=employees.map((employee,index)=>`<p>${employee.name} : ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML=totalemp;
  }

  function calculateTotalSalaries()
  {
    const totalSalaries=employees.reduce((total,employee)=>
total+employee.salary,0 );
alert(`total salaries:${totalSalaries}`); }


function displayHREmployees() 
{
    const HRemployees=employees.filter((employee)=>employee.department==="HR");
    const printHremp=HRemployees.map((employee,index)=>`<p>${employee.name} : ${employee.age} -${employee.department}-${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML=printHremp;
}

function findEmployeeById(employeeId)
{
//     This code uses the find method to locate an employee in the employees array whose ID matches the provided employee ID, storing the found employee object in the foundEmployee variable.

// An if statement is employed to see whether the details for that particular ID are found and display details accordingly.
const foundEmployee=employees.find((employee)=>employee.id===employeeId);
if(foundEmployee)
{
    document.getElementById('employeeDetails').innerHTML=`<p>${foundEmployee.name} : ${foundEmployee.age} :${foundEmployee.department} : ${foundEmployee.salary}</p>`;
}
else{
    document.getElementById('employeeDetails').innerHTML=`${employeeId} not found`;
}
}


   