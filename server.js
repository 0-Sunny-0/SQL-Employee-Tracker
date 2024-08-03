const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to Database
// Enter in PostgreSQL username and password below

const pool = new Pool (
    {
        user: '',
        password: '',
        host: 'localhost',
        database: 'employee_db'
    },
    console.log(`You're connected to the employee_db database`) 
)

pool.connect();