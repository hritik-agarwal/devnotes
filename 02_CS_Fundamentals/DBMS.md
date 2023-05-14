# Topics

1. attributes
2. keys
3. acid property
4. data integrity
5. normalisation
6. sql commands
7. sql constraints
8. joins
9. aggregate functions
10. pattern matching
11. character manipulation function

# DBMS

- It is a software that managest database which is a group of inter-related records.
- Advantages: control data redundancy, easy maintenance, reduce time, backup

## Attributes Types

1. Simple Attributes
   - It can not be further divided like age.
2. Composite Attributes
   - It can be further divided like name.
3. Multi Valued Attributes
   - It can contain multiple values like phone number.
4. Derived Attributes
   - It can be derived from other attribute like age.
5. Key Attributes
   - It uniquely identifies records like id.

## Kyes in SQL

1. Super Key
   - Combination of all attributes which can uniqely identifies records.
2. Candidate Key
   - Minimum subset of attributes which can uniqely identifies records.
3. Primary Key
   - Candidate key which is selected for uniqely identifies records.
4. Foreign Key
   - An attribute which is primary key of another table.
5. Alternate Key
   - Candidate key except primary key.

## Types of SQL Commands

1. DDL : Data Definition Language
   - Commands => Drop, Rename, Create, Alter, Truncate
2. DML : Data Manipulation Language
   - Commands => Delete, Insert, Update
3. DCL : Data Control Language
   - Commands => Grant, Revoke
4. TCL : Transaction Control Language
   - Commands => Rollback, Savepoint
5. DQL : Data Query Language
   - Commands => Select

## Constraints in SQL

1. NOT NULL
   - data can not be null
2. UNIQUE
   - data can not be unique
3. PRIMARY KEYS
   - key uniquely identify rows
4. FOREIGN KEYS
   - key is primary key on another table
5. CHECK
   - check if the dat satisfy a condition

## Aggregate Functin

1. count
2. sum
3. avg
4. min
5. max

## Find nth highest salary

select salary from employees order by salary desc limit (n-1,1);

## Create copy of table

create table new_table like old_table; (only schema)
create table new_table select \* from old_table; (schema with data)

## ACID Properties

1. Atomicity
   - Transaction can not be done partially, they must execute either fully or fail.
2. Consistency
   - Data must not be stagnated.
3. Isolation
   - One transaction should not affect any other transaction.
4. Durability
   - Data should be persistent.

## Data Integrity

- It refers to overall accuracy, completeness and reliability of data.

1. Domain Integrity
   - Restricting format, type and volume of data recorded in the database.
2. Entity Integrity
   - Ensure that data is not recorded multiple times.
3. Referential Integrity
   - Remove duplicate data records
4. user Defined Integrity
   - Fulfill the specifications

## Difference Between

1. DELETE, TRUNCATE, DROP
   - delete used to delete one or more rows
   - truncate delete all the data at once
   - drop delete the whole table itself
   - delete is reversible but truncate and drop are not reversible
   - delete is DML command, truncate and drop are DDL command
2. WHERE, HAVING
   - apply condition on individual record
   - apply condition on group of records
3. GROUP BY, ORDER BY
   - group by is used to group data
   - order by is used to sort the data
4. CHAR, VARCHAR
   - char is fixed size
   - varchar is variable size
5. UNION, JOIN
   - in union, column wise join occur
   - in join, row wise join occur
6. IN, EXISTS
   - in is used as multiple or condition
   - exists is used to check data exists or not in a list of items
7. UNION, MINUS, INTERSECT
   - union combines data from both table
   - minus removes data of one table from another
   - intersect finds the data presents in both table
8. UNION, UNION ALL
   - in union all duplication of common data occurs but in union, it does not occur

## Types of Joins

1. Inner Join
   - return record having matching value in both tables
2. Left (Outer) Join
   - return all record from left table and matched record from right table
3. Right (Outer) Join
   - return all record from right table and matched record from left table
4. Full (Outer) Join
   - return all record when there is a match in either left or right table

## Normalisation

- It reduces redundance in table.
- It can cause certan anomalies
  - INSERT
    - repetion of data, if many columns have same data
  - UPDATE
    - updaing 1 row will require updating all rows
  - DELETE
    - deleting row containing additional data not present in other rows will loss data
- There are 4 types of normalisation
  - 1NF
    - No multivalued attribute
  - 2NF
    - 1NF and no partial dependency
    - partial dependency is when a non-primary attribute depends on part of the primary key and not on the whole key.
  - 3NF
    - 2NF and no transitive dependency
    - transitive dependency is when a non-primary attribute depends on another non-primary attribute rather than primary key.
  - BCNF
    - 3NF and LHS of functional dependency must be part of super key

## Pattern Matching

- LIKE clause is used for pattern matching task
- - -> 0 or more characters
- \_ -> 1 character

## Character Manipulation Function

1. upper
2. lower
3. initcap
4. length
5. concat

## View

- It is a virtual table based on result of an sql statement.
- create view abc as (select statement)
