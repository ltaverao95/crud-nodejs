const client = require('../database/index');
const controller = {};

controller.list = (req, res) => {
    client.query("SELECT * FROM clients", (err, customers) => {

        if(err){
            res.json(err);
            return;
        }

        res.render('customers', {
            data: customers.rows
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    client.query('INSERT INTO clients (name, surname, email, phone) VALUES ($1, $2, $3, $4)', [data.name, data.surname, data.email, data.phone], (err, customers) => {
        
        if(err){
            res.json(err);
            return;
        }

        res.redirect('/');
    });
};

controller.edit = (req, res) => {
    
    const id = req.params.id;
    client.query('SELECT * FROM clients WHERE id = $1', [id], (err, customers) => {
        
        if(err){
            res.json(err);
            return;
        }

        res.render('customer_edit', {
            data: customers.rows[0]
        });
    });
};

controller.update = (req, res) => {
    
    const id = req.params.id;
    const newCustomer = req.body;

    client.query('UPDATE clients SET name = $1, surname =$2, email = $3, phone = $4 WHERE id = $5 ', [newCustomer.name, newCustomer.surname, newCustomer.email, newCustomer.phone, id], (err, customers) => {
        
        if(err){
            res.json(err);
            return;
        }

        res.redirect('/');
    });
};

controller.delete = (req, res) => {
    
    const id = req.params.id;
    client.query('DELETE FROM clients WHERE id = $1', [id], (err, customers) => {
        
        if(err){
            res.json(err);
            return;
        }

        res.redirect('/');
    });
};

module.exports = controller;