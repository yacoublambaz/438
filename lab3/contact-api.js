const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let contacts = [{
    "contact_id": "9781593275846",
    "contact_name": "Yacoub Lambaz",
    "contact_profession": "Engineer",
    "contact_tel_number": "962798628842",
    "contact_mobile_number": "962798628842",
},
{
    "contact_id": "9781449331818",
    "contact_name": "Seif Qiblawi",
    "contact_profession": "Engineer",
    "contact_tel_number": "96278869408",
    "contact_mobile_number": "9627827412",
},
{
    "contact_id": "9781449365035",
    "contact_name": "Ghalia Nasreddine",
    "contact_profession": "Engineer",
    "contact_tel_number": "96278521521",
    "contact_mobile_number": "96278521687",
}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const contact = req.body;

    // output the contact to the console for debugging
    console.log(contact);
    contacts.push(contact);

    res.send('contact is added to the database');
});

app.get('/contact', (req, res) => {
    res.json(contacts);
});

app.get('/contact/:contact_id', (req, res) => {
    // reading contact_id from the URL
    const contact_id = req.params.contact_id;

    // searching contacts for the contact_id
    for (let contact of contacts) {
        if (contact.contact_id === contact_id) {
            res.json(contact);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('contact not found');
});

app.delete('/contact/:contact_id', (req, res) => {
    // reading contact_id from the URL
    const contact_id = req.params.contact_id;

    // remove item from the contacts array
    contacts = contacts.filter(i => {
        if (i.contact_id !== contact_id) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('contact is deleted');
});

app.post('/contact/:contact_id', (req, res) => {
    // reading contact_id from the URL
    const contact_id = req.params.contact_id;
    const newcontact = req.body;

    // remove item from the contacts array
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i]

        if (contact.contact_id === contact_id) {
            contacts[i] = newcontact;
        }
    }

    // sending 404 when not found something is a good practice
    res.send('contact is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));