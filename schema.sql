DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;
USE employees_db;
CREATE TABLE departmet (
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    utilized_budget DECIMAL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT
    title VARCHAR(30) NOT NULL,
    utilized_budget DECIMAL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    nickname VARCHAR(30),
    emp_dept VARCHAR(30), NOT NULL,
    roles_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee (id),
    FOREIGN KEY (roles_id) REFERENCES roles (id),
);

CREATE TABLE manager (
    id INT NOT NULL,
    mgr_name VARCHAR(30) NOT NULL
);