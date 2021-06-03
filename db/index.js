const connection = require('./connection');

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  // view all depts
  viewDept() {
    return this.connection.query(`select * from department`);
  }
  // view all depts with budget attached --- TODO:complete
  viewDeptBudget() {
    return this.connection.query(
      `select department.id, department.name as Department from department`
    );
  }
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
    return this.connection.query(`update employee set ? where ?`, array);
  }
  //   delete dept
  deleteDept(dept) {
    return this.connection.query(`delete from department where ?`, dept);
  }
  // delete role
  deleteRole(role) {
    return this.connection.query(`delete from role where ?`, role);
  }
  // delete employee
  deleteEmp(employee) {
    return this.connection.query(`delete from employee where ?`, employee);
  }
  //   end connection
  end() {
    this.connection.end();
  }
}

module.exports = new DB(connection);
