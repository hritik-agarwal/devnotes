# SQL

## Topics

1. Introduction
2. Create, Alter and Delete Databases and Table
3. Select Records
4. Insert, Update and Delete Records
5. Joins
6. Aliases
7. Constraints
8. Indexes

## Introduction

- It stands for Structured Query Language which is used to interact with Relational Database.
- Popular databases that uses SQL - MySQL, PostgreSQl, Oracle, MS SQL Server, SQLite, MariaDB, Hadoop etc

## Database and Table (Create, Alter and Delete)

```sql
-- Creating a database
CREATE DATABASE test;

-- Deleting a database
DROP DATABASE test;

-- Creating a table
CREATE TABLE customers (
    id INT not NULL AUTO_INCREMENT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    phoneNumber INT,
    PRIMARY KEY(id)
);

-- Adding a column in table
ALTER TABLE customers
ADD COLUMN email INT;

-- Modifying column data type
ALTER TABLE customers
MODIFY COLUMN email VARCHAR(255);

-- Deleting a column in table
ALTER TABLE customers
DROP COLUMN phoneNumber;
```

## Manipulate Records (Insert, Update and Delete)

```sql
-- Inserting data into table
INSERT INTO customers (firstName, lastName, email)
VALUES ('Hritik', 'Agarwal', 'hritikagarwal456@gmail.com');

-- Update data into table
UPDATE customers
SET email = 'jayamagarwal123@gmail.com'
WHERE firstName = 'Jayam';

-- Deleting data from table
DELETE FROM customers
WHERE firstName = 'Jayam';
```

## Selecting Query Records (Select)

```sql
-- Querying all data from table
SELECT * FROM customers;

-- Querying selected columns from table
SELECT firstName, lastName  FROM customers;

-- Querying a specific or group of rows from table
SELECT *  FROM customers where firstName = "Hritik";

-- Querying all data from table in a sorted order of some column
SELECT * FROM customers ORDER BY lastName;      -- Ascending Order
SELECT * FROM customers ORDER BY lastName DESC; -- Descending Order

-- Querying distinct values from a column in table
SELECT DISTINCT firstName  FROM customers;

-- Querying based on some maths logic/operation
SELECT * from customers where age < 20;
```

## Constraints (Primary, Foreign)

```sql
-- Primary Key is unique column to identify each row
-- Foreign Key is column which references another table's column(usually its primary key)
CREATE TABLE orders (
    id INT not NULL AUTO_INCREMENT,
    orderNumber INT,
    productId INT,
    customerId INT,
    orderDate DATETIME default CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(productId) references products(id),
    FOREIGN KEY(customerId) references customers(id)
);
```

## Joins (Inner, Left, Right, Outer)

```sql
SELECT order.orderNumber, customers.firstName, customers.lastName, products.name
FROM orders
INNER JOIN customers
  ON orders.customerId = customers.id
INNER JOIN products
  ON orders.productId = products.id
ORDER BY orders.orderNumber;
```

## Aliases

```sql
-- Rename a column
SELECT
  firstName           AS 'First Name',
  lastName            AS 'Last Name'
FROM customers;

-- Joining columns
SELECT
  CONCAT(firstName,' ',lastName)           AS 'Name'
FROM customers;

-- Renaming a table
SELECT c.firstName AS "First name" FROM customers AS c;
```

## Indexes

```sql
-- Creating an index
CREATE INDEX customersIndex
ON customers(age);

-- Deleting an index
DROP INDEX customersIndex ON customers;
```

## SQL Operators

```sql
-- Equal To
SELECT * from customers WHERE firstName = 'Hritik';

-- Not Equal To
SELECT * from customers WHERE lastName != 'Agarwal';

-- Less Than
SELECT * from customers WHERE age < 30;

-- Less Than Equal To
SELECT * from customers WHERE age > 30;

-- Greater Than
SELECT * from customers WHERE age <= 30;

-- Greater Than Equal To
SELECT * from customers WHERE age >= 30;

-- Between An Inclusive Range
SELECT * from orders WHERE cost BETWEEN 100 AND 1000;

-- Match a Character Pattern
SELECT * from customers WHERE firstName LIKE 'H%';

-- Equal to One of Multiple Possible Values
SELECT * from products WHERE sector IN (201, 500);

-- Compare to Null Values
SELECT * from customers WHERE firstName IS NOT NULL;

-- Is Equal to Value or Both are Nulls
SELECT * from bank WHERE debt IS NOT DISTINCT FROM givenDebt;
```

## Aggregate Functions

```sql
-- Counting non-empty rows
SELECT COUNT(age) AS 'Count Age ' from customers;

-- Finding max sum
SELECT MAX(age) AS 'Count Age ' from customers;

-- Finding min sum
SELECT MIN(age) AS 'Count Age ' from customers;

-- Finding average
SELECT AVG(age) AS 'Average Age' from customers;

-- Finding sum
SELECT SUM(cost) AS 'Total Cost' from orders;

-- Using with group by having clause
SELECT age, COUNT(age) from customers
WHERE age < 30
GROUP BY age
HAVING COUNT(age) >= 2;
```
