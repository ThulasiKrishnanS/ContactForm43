const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let contacts = []; 

app.use(cors());
app.use(bodyParser.json());

// Add a contact
app.post('/add-contact', (req, res) => {
  const { name, contact } = req.body;
  if (name && contact) {
    contacts.push({ name, contact });
    res.json({ message: 'Contact saved successfully' });
  } else {
    res.status(400).json({ message: 'Name and contact are required' });
  }
});

// Get all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
