# Experiment 10: CRUD Operations using Node.js + Express.js Backend

## Project Title
CRUD Operations on Student Records using Node.js, Express.js and MongoDB

## Objective
The objective of this experiment is to build REST APIs using Node.js and Express.js to perform CRUD operations on a MongoDB database.

## Brief Description
This project demonstrates how to create a backend application using Node.js and Express.js. The application connects to MongoDB and performs Create, Read, Update and Delete operations on student records.

Each student record contains:
- name
- email
- course

The APIs are tested using Postman.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv
- Nodemon
- Postman

## Project Structure

```text
experiment10-crud-node-express/
├── server.js
├── .env
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── screenshots/
└── README.md

API Endpoints

Method

Endpoint

Description

POST

/api/students

Create new student

GET

/api/students

Fetch all students

GET

/api/students/:id

Fetch single student

PUT

/api/students/:id

Update student

DELETE

/api/students/:id

Delete student

Workflow

1. Client sends request through Postman.
2. Express.js receives the request.
3. Route handler processes the request.
4. Mongoose communicates with MongoDB.
5. Database performs CRUD operation.
6. Response is returned to client.

Data Schema

Student Collection
Field

Type

Description

name

String

Student name

email

String

Student email

course

String

Student course

createdAt

Date

Record creation time

updatedAt

Date

Record update time

Run Project
npm install
npm run dev
Server runs on:
http://localhost:5000

Testing Results

* Create student record: Successful
* Read all records: Successful
* Read single record by ID: Successful
* Update record by ID: Successful
* Delete record by ID: Successful

Screenshots Included

* MongoDB connected message
* Create record API
* Read all records API
* Read single record API
* Update record API
* Delete record API
* Database collection view

Learning Outcomes

* Learned how to create REST APIs using Node.js and Express.js.
* Learned how to connect backend with MongoDB.
* Implemented CRUD operations.
* Tested APIs using Postman.
* Understood backend routing and controller logic.

Conclusion

This experiment successfully demonstrates CRUD operations using Node.js, Express.js and MongoDB. The backend can create, read, update and delete student records using REST APIs.
