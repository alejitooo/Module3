const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let elementos = [];

app.get('/elementos', (req, res) => res.json(elementos));
app.post('/elementos', (req, res) => {
  elementos.push(req.body);
  res.json({ ok: true });
});

app.listen(port, () => console.log(`API corriendo en puerto ${port}`));
