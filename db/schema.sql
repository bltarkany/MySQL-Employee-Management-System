-- drop database to remove conflicts or for reloading
drop database if exists employee_manager_db;
-- create database
create database employee_manager_db;
-- use database
use employee_manager_db;

-- department table
create table department (
    -- primary key is an index
    id int not null auto_increment primary key,
    name varchar(45) unique not null
);

-- role table
create table role (
    -- primary key is an index
    id int not null auto_increment primary key,
    title varchar(45) unique not null,
    salary decimal(12, 2) unsigned not null,
    -- dept id should be a secondary index if searching by dept
    dept_id int not null,
    index dept_index (dept_id),
    foreign key (dept_id) references department(id) on delete cascade
);

-- employee table
create table employee (
    -- primary key is the primary index
    id int not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    -- role id should be a secondary index for seraching by role
    role_id int not null,
    index role_index (role_id),
    -- manger is should be a secondary index for searching by manager
    manager_id int,
    index manag_index (manager_id),
    foreign key (role_id) references role(id) on delete cascade,
    foreign key (manager_id) references employee(id) on delete cascade
);

