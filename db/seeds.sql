-- code from mini project seeds.sql:

INSERT INTO department (dept_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
       

INSERT INTO role (id, title, salary, department_id)
VALUES (NULL, 'manager', 80000, 1),
       (NULL, 'clerk', 180000, 2), 
       (NULL, 'hr', 80000, 2);
       

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (NULL,"Susie", "Q", 2, 0), 
       (NULL,"Bob", "Johnson", 2, 0);

   
    