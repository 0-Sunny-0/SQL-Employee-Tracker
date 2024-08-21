// Make a function that adds to the employee list, export that function over to the index.js

// Create CRUD for each lib file. 

// Create/add the new employee
app.post('', ({ body }, res) => {
    const sql = `INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ($1)`;
    const params = [body.first_name, body.last_name];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Employee successfully added',
            data: body
        });
    });
});

// Read/Show all employees
app.get('', (req, res) => {
    const sql = `SELECT * FROM employee`;

    pool.query(sql, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'All employees shown',
            data: rows
        });
    });
});

// Update the employees
app.put('', (req, res) => {
    const sql = `UPDATE employees SET employee = $1 WHERE name = $2`;
    const params = [req.body.first_name, req.params.last_name];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.rowCount) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'Employee successfully updated!',
                data: req.body,
                changes: result.rowCount
            });
        }
    });
});

// Delete an employee
app.delete('' (req, res) => {
    const sql = `DELETE FROM department WHERE id = $1`;
    const params = [req.body.id];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: err.message });
        } else if (!result.rowCount) {
            res.json({
                message: 'Employee not found. Try again'
            });
        } else {
            res.json({
                message: 'Employee has been deleted',
                changes: result.rowCount,
                id: req.params.id
            });
        }
    });
});

module.exports = employee;