import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const db = require('./db');  // Assuming you're using sqlite3

const employees = [
  { name: 'John Doe', email: 'john@example.com', job_title: 'Developer', department: 'IT', salary: 60000, start_date: '2023-01-01', end_date: null },
  { name: 'Jane Smith', email: 'jane@example.com', job_title: 'HR Manager', department: 'HR', salary: 70000, start_date: '2022-06-15', end_date: null }
];

const timesheets = [
  { employee_id: 1, start_time: '2025-02-01T09:00:00', end_time: '2025-02-01T17:00:00', summary: 'Worked on project X' },
  { employee_id: 2, start_time: '2025-02-02T09:00:00', end_time: '2025-02-02T17:00:00', summary: 'Worked on HR tasks' }
];

// Insert data into the database
db.insertEmployees(employees);
db.insertTimesheets(timesheets);


