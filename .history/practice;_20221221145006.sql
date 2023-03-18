practice;

INSERT INTO Department VALUES ('D004', '営業部', 12);

use practice;

SELECT * FROM Employee;
SELECT * FROM Department;


show TABLE;

INSERT INTO Employee VALUES ('E00008', '山本景子', '女', '1996-12-25', 250000, 'D002');
INSERT INTO Employee VALUES ('E00009', '渡辺五郎', '男', '1997-08-11', 250000, 'D004');
INSERT INTO Department VALUES ('D005', '経理部', 8);

UPDATE Employee SET name = '鈴木太郎' WHERE emp_id = 'E00001';

UPDATE Employee SET salary = salary + 10000, dep_id = 'D001' WHERE dep_id = 'D004';
UPDATE Department SET name = '購買会', floor = 12 ;

mysqldump --single-transaction -u root -p practice > ./practice;.sql

CREATE TABLE Department(
     dep_id CHAR(4) NOT NULL,
     name VARCHAR(10) NOT NULL,
     floor INT,
     PRIMARY KEY(dep_id));



INSERT INTO Department VALUES ('D001', '総務部', 8);

INSERT INTO Department VALUES ('D002', '人材開発部', 8);

INSERT INTO Department VALUES ('D003', 'システム開発部', 12);

INSERT INTO Department VALUES ('D004', '営業部', 12);

INSERT INTO Department VALUES ('D005', '経理部', 8);
