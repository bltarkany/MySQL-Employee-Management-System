-- drop database to remove conflicts or for reloading
drop database if exists employee_manager_db;
-- create database
create database employee_manager_db;
-- use database
use employee_manager_db;

-- department table
create table department (
    id int not null auto_increment primary key,
    name varchar(45) unique not null
);

-- role table
create table role (
    id int not null auto_increment primary key,
    title varchar(45) unique not null,
    salary decimal(12, 2) unsigned not null,
    dept_id int unsigned not null,
    foreign key (dept_id) references department(id) on delete cascade
);

-- employee table
create table employee (
    id int not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int,
    foreign key (role_id) references role(id) on delete cascade
);

