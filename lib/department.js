// Make a function that adds to the department, export that function over to the index.js
// Reference the mini project (sequel line and pool.query function) ignore API routes

// Create CRUD for each lib file. 

// Create/add the new department
app.post('', ({ body }, res) => {
    const sql = `INSERT INTO department (name) VALUES ($1)`;
    const params = [body.name];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Department successfully added',
            data: body
        });
    });
});

// Read/Show all departments
app.get('', (req, res) => {
    const sql = `SELECT id, name AS title FROM department`;

    pool.query(sql, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'All departments shown',
            data: rows
        });
    });
});

// Update the department
app.put('', (req, res) => {
    const sql = `UPDATE departments SET department = $1 WHERE name = $2`;
    const params = [req.body.name, req.params.id];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.rowCount) {
            res.json({
                message: 'Department not found'
            });
        } else {
            res.json({
                message: 'Department successfully updated!',
                data: req.body,
                changes: result.rowCount
            });
        }
    });
});

// Delete a department
app.delete('' (req, res) => {
    const sql = `DELETE FROM department WHERE id = $1`;
    const params = [req.body.id];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: err.message });
        } else if (!result.rowCount) {
            res.json({
                message: 'Department not found. Try again'
            });
        } else {
            res.json({
                message: 'Department has been deleted',
                changes: result.rowCount,
                id: req.params.id
            });
        }
    });
});

module.exports = department;