# MongoDB

1. MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.
2. Collections in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.
3. Documents are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.
4. Fields, also known as properties or attributes, are similar to columns in a SQL table. In the image below, FirstName, LastName, Email, and Phone are all fields.
5. While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose schema is a document data structure (or shape of the document) that is enforced via the application layer.
6. While Mongoose schemas define the overall structure or shape of a document, SchemaTypes define the expected data type for individual fields (String, Number, Boolean, and so on). You can also pass in useful options like required to make a field non-optional, default to set a default value for the field, and many more.
7. Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.


![](https://cdn-media-1.freecodecamp.org/images/0*rcotALFe2LeebN_y.)
