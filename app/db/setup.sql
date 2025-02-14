-- Employees Table
CREATE TABLE employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  dob DATE,
  job_title TEXT,
  department TEXT,
  salary REAL,
  start_date DATE,
  end_date DATE
);

-- Timesheets Table
CREATE TABLE timesheets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee_id INTEGER,
  start_time DATETIME,
  end_time DATETIME,
  summary TEXT,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);
