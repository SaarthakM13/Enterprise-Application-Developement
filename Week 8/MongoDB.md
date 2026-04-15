---
title: "MongoDB CRUD Operations"
date: "April 14, 2026"
---

# MongoDB CRUD Operations

## 1. Aim

To perform Create, Read, Update, and Delete (CRUD) operations and understand basic MongoDB functionality using MongoDB Shell and MongoDB Compass.

## 2. Software Requirements

- Operating System: Windows
- MongoDB (latest stable version)
- MongoDB Compass
- MongoDB Shell (`mongosh`)

## 3. Setup and Installation

### 3.1 MongoDB Installation

MongoDB was installed on the local machine to run the database server.

### 3.2 MongoDB Compass Connection

MongoDB Compass was used to connect to the local MongoDB instance using the default connection string:

`mongodb://localhost:27017`

### 3.3 Accessing MongoDB Shell

The MongoDB Shell (`mongosh`) was accessed through MongoDB Compass to execute database commands and perform CRUD operations.

## 4. Procedure and Execution

### 4.1 Part A: CRUD Operations

#### Step 1: Create and Select Database

Command:

```javascript
use collegeDB
```

Expected shell response:

```text
switched to db collegeDB
```

#### Step 2: Insert Documents

Command:

```javascript
db.students.insertOne({
  name: "Saarthak",
  age: 21,
  dept: "IT",
});

db.students.insertMany([
  { name: "Madhu", age: 19, dept: "IT" },
  { name: "Pritam", age: 22, dept: "IT" },
]);
```

#### Step 3: View Inserted Data

Command:

```javascript
db.students.find().pretty();
```

Sample shell output:

```text
{
  name: "Shiva",
  age: 20,
  dept: "IT"
}
{
  name: "Ravi",
  age: 21,
  dept: "CSE"
}
{
  name: "Teja",
  age: 22,
  dept: "ECE"
}
```

Documentation note: Capture the first MongoDB Compass screenshot here by opening the `collegeDB` database and `students` collection.

#### Step 4: Update Operations

Command:

```javascript
db.students.updateOne({ name: "Shiva" }, { $set: { age: 21 } });

db.students.updateMany({ dept: "IT" }, { $set: { status: "active" } });
```

#### Step 5: Verify Updated Data

Command:

```javascript
db.students.find().pretty();
```

Sample output:

```text
{
  name: "Shiva",
  age: 21,
  dept: "IT",
  status: "active"
}
```

#### Step 6: Delete Operations

Command:

```javascript
db.students.deleteOne({ name: "Ravi" });
db.students.deleteMany({ age: { $gt: 21 } });
```

#### Step 7: Display Final Data

Command:

```javascript
db.students.find().pretty();
```

Output note: Record the remaining documents as observed in your system.

### 4.2 Part A Extension: Advanced Queries (Q1-Q12)

#### Step 8: Insert Additional Records

Command:

```javascript
db.students.insertMany([
  { name: "Sarthak", age: 21, dept: "IT", marks: 85 },
  { name: "Aman", age: 19, dept: "CSE", marks: 70 },
  { name: "Sneha", age: 22, dept: "ECE", marks: 90 },
  { name: "Riya", age: 20, dept: "IT", marks: 60 },
  { name: "Kiran", age: 23, dept: "CSE", marks: 40 },
]);
```

#### Step 9: Query Operations

Command:

```javascript
db.students.find({ age: { $gt: 20 } });
db.students.find({ marks: { $gte: 75 } });
db.students.find({ dept: "IT", marks: { $gt: 80 } });
db.students.find({
  $or: [{ dept: "CSE" }, { marks: { $lt: 50 } }],
});
```

Output note: Include two or three representative records for each query category.

#### Step 10: Projection and Sorting

Command:

```javascript
db.students.find({}, { name: 1, marks: 1, _id: 0 });
db.students.find().sort({ marks: -1 }).limit(3);
```

#### Step 11: Regular Expression and Compound Conditions

Command:

```javascript
db.students.find({ name: { $regex: "^S" } });

db.students.find({
  marks: { $gte: 60, $lte: 90 },
  dept: { $ne: "ECE" },
});
```

#### Step 12: Advanced Update Operations

Command:

```javascript
db.students.updateMany({ marks: { $lt: 50 } }, { $inc: { marks: 5 } });

db.students.updateMany(
  { dept: "IT" },
  { $set: { status: "active", semester: 2 } },
);
```

#### Step 13: Replace and Upsert

Command:

```javascript
db.students.replaceOne(
  { name: "Ravi" },
  { name: "Ravi", age: 22, dept: "CSE" },
);

db.students.updateOne(
  { name: "Kiran" },
  { $set: { age: 23, dept: "IT" } },
  { upsert: true },
);
```

#### Step 14: Remove Field and Update Array

Command:

```javascript
db.students.updateMany({}, { $unset: { status: "" } });

db.students.updateOne({ name: "Shiva" }, { $push: { hobbies: "cricket" } });
```

Documentation note: Capture the final MongoDB Compass screenshot here showing updated fields such as marks and hobbies.

### 4.3 Part B: Replica Set (Theory and Commands)

The following commands were used to understand replica set initialization and status verification.

Command:

```bash
mongod --port 27017 --dbpath data1 --replSet rs0
mongod --port 27018 --dbpath data2 --replSet rs0
mongod --port 27019 --dbpath data3 --replSet rs0
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
});
rs.status();
```

Expected output:

Replica set initialized successfully, and replication status was verified across nodes.

## 5. Result

CRUD operations were successfully performed in MongoDB. Advanced queries, including filtering, projection, sorting, and update operations, were executed successfully. Replica set configuration and its working principle were studied and documented.
