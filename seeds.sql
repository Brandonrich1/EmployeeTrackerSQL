-- Departments
INSERT INTO department (name) VALUES
("Admin"),
("Manager"),
("HR"),  
("Marketing"), 
("Product Development"), 
("Product Validation");

-- Roles
INSERT INTO role (title, salary, department_id) VALUES ("Chief Executive Officer", 150000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 115000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Senior HR", 75000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ("HR Assistant", 65000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Multimedia Specialist", 50000.00, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Senior Software Engineer", 95000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Scrum Master", 80000.00, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Product Validation Engineer", 88000.00, 6);

-- Employees
-- boss
INSERT INTO employee (first_name, last_name, role_id) VALUES
("Brandon", "Rich", 1);

-- All Employees (assigned managers)
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("bob", "biles", 2, 1),
("john", "johnson", 3, 2),
("Kyle", "Klein", 3, 2),
("Ralph", "Romero", 4, 2),
("Mike", "myers", 5, 2),
("Derek", "Djuric", 5, 2),
("Lonnie", "Larrinaga", 5, 2),
("Abel", "Allen", 5, 2),