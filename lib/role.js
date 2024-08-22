// Make a function that adds to the role list, export that function over to the index.js

// Create CRUD for each lib file. 

// Create/add the new role
app.post('', ({ body }, res) => {
    const sql = `INSERT INTO role (id, title, salary, department_id) VALUES ($1)`;
    const params = [body.id, body.title, body.salary, body.department_id];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'New role successfully added',
            data: body
        });
    });
});

// Read/Show all roles
app.get('', (req, res) => {
    const sql = `SELECT * FROM role`;

    pool.query(sql, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'All roles shown',
            data: rows
        });
    });
});

// Update the roles
app.put('', (req, res) => {
    const sql = `UPDATE roles SET role = $1 WHERE id = $2`;
    const params = [req.body.title];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.rowCount) {
            res.json({
                message: 'Role not found'
            });
        } else {
            res.json({
                message: 'Role successfully updated!',
                data: req.body,
                changes: result.rowCount
            });
        }
    });
});

// Delete a role
app.delete('' (req, res) => {
    const sql = `DELETE FROM role WHERE id = $1`;
    const params = [req.body.title];

    pool.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: err.message });
        } else if (!result.rowCount) {
            res.json({
                message: 'Role not found. Try again'
            });
        } else {
            res.json({
                message: 'Role has been deleted',
                changes: result.rowCount,
                id: req.params.title
            });
        }
    });
});

module.exports = role;