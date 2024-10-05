// Task 1 Create a Department Structure

const company ={
    departments: [
        {
            departmentName: `Engineering`,
            employees: [
                {
                    name: `Alice`,
                    salary: 100000,
                    subordinates: [
                        {
                            name: `Bob`,
                            salary: 80000,
                            subordinates: [
                                {
                                    name: `Charlie`,
                                    salary: 60000,
                                    subordinates:[]
                                }]}]},
                   {             
                   name: `David`,
                   salary: 90000,
                   subordinates:[]}
            ]
        },
        {departmentName: `Sales`,
        employees: [
            {
                name: `Eve`,
                salary: 85000,
                subordinates:[
                    {
                        name: `Frank`,
                        salary: 70000,
                        subordinates:[]
                    }
                ]
            },
            {
                name: `Grace`,
                salary: 95000,
                subordinates:[]
            }
        ]
    }
]
};
 
// Task 2 Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0;
    for (const employee of department.employees){
        totalSalary += employee.salary;

        if(employee.subordinates.length > 0){
        totalSalary += calculateEmployeeSalary(employee.subordinates);
    }
}
return totalSalary;
}

function calculateEmployeeSalary(subordinates) {
    let total = 0;
    for (const subordinate of subordinates){
        total += subordinate.salary;
        if (subordinate.subordinates.length > 0){
            total += calculateEmployeeSalary(subordinate.subordinates);
        }
    }
    return total;
}

// Task 3 create a function to calculate the total salary for all departments 

function calculateCompanySalary(company){
    let companySalary = 0;
    for(const department of company.departments){
        companySalary += calculateDepartmentSalary(department);
    }
    return companySalary;
}
const totalSalary = calculateCompanySalary(company);
console.log(`Total department salary for company; $${totalSalary}`);
