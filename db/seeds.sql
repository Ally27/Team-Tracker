INSERT INTO department (name, id)
VALUES ("Sales", 1);
VALUES ("Engineering", 2);
VALUES ("Finance", 3);
VALUES ("Legal", 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 80000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 160000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tupik", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kunal", "Singh", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malia", "Brown", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Allyson", "Gonzales", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Allen", 1, 2);