const connection = require('./connection');

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewDept() {
    return this.connection.query(`select * from department`);
  }

  // viewDeptBudget(){
  //     return
  // }
  // all roles with depts
  viewRoles() {
    return this.connection.query(
      `select role.id, role.title, role.salary, department.name as department 
      from role left join department on role.dept_id = department(id)`
    );
  }
  // all emps
  viewEmp() {
    return this.connection.query(`select * from employee`);
  }
  // all emps with managers
  viewEmpMan() {
    return this.connection.query(
      `select employee.id, concat(employee.first_name, ' ', employee.last_name) as Employee, 
        role.title as Role, role.salary as Salary, department.name as Department,
        concat(employee.first_name, ' ', employee.last_name) as Manager
        from employee left join role on role.id = employee.role_id 
        left join department on role.dept_id = department.id
        left join employee as Manager on employee.manager_id = employee.id`
    );
  }
  // view emps by manager, dept, role search
  viewEmpBy(byObj) {
    return this.connection.query(
      `select employee.id, concat(employee.first_name, ' ', employee.last_name) as Employee, 
      role.title as Role, role.salary as Salary, department.name as Department,
      concat(employee.first_name, ' ', employee.last_name) as Manager
      from employee left join role on role.id = employee.role_id 
      left join department on role.dept_id = department.id
      left join employee as Manager on employee.manager_id = employee.id where ?`,
      byObj
    );
  }
  //  add a new dept
  addDept(dept) {
    return this.connection.query(`inset into department set ?`, dept);
  }
  // add a new role
  addRole(role) {
    return this.connection.query(`insert into role set ?`);
  }
  //   add new employee
  addEmp(employee) {
    return this.connection.query(`insert into employee set ?`, employee);
  }
  //   update an employee
  updateEmp(array) {
      return this.connection.query(`update employee set ? where ?`, array)
  }
}
