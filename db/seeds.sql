USE employeelist_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal ");
       
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 50000, 1),
("Lead Engineer", 60000, 2),
("Software Engineer", 60000, 2),
("Account Manager", 50000, 3),
("Accountant", 50000, 3),
("Legal Team Lead", 100000, 4),
("Lawyer" , 850000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joe","Smith",1, null),
("Jill", "Johnson",2, 1),
("Bart", "Simpson", 3, 1);