import { Department, Employee, Customer, Order } from './app.models';
export const Products = [
  {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT'},
  {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL'},
  {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD'}
];

export const Categories =[
  'ECT', 'ECL', 'FOD'
];

export const Departments: Array<Department> = new Array<Department>();
Departments.push(new Department(10, 'D1'));
Departments.push(new Department(20, 'D2'));
Departments.push(new Department(30, 'D3'));

export const Employees: Array<Employee> = new Array<Employee>();
Employees.push(new Employee(101, 'A', 10));
Employees.push(new Employee(102, 'B', 20));
Employees.push(new Employee(103, 'C', 30));
Employees.push(new Employee(104, 'D', 10));
Employees.push(new Employee(105, 'E', 20));
Employees.push(new Employee(106, 'F', 30));

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer(10, 'D1',"City","email", "1111111111"));
Customers.push(new Customer(20, 'D2',"City1","email1", "11111111112"));
Customers.push(new Customer(30, 'D3',"City2","email2", "11111111113"));

export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(101, 'A', new Date(2020,2,3), 10, 1, 100));
Orders.push(new Order(102, 'B', new Date(2020,2,3), 10, 1, 100));
Orders.push(new Order(103, 'C', new Date(2020,2,3), 20, 1, 100));
Orders.push(new Order(104, 'D', new Date(2020,2,3), 20, 1, 100));
Orders.push(new Order(105, 'E', new Date(2020,2,3), 30, 1, 100));
Orders.push(new Order(106, 'F', new Date(2020,2,3), 30, 1, 100));

