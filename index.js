const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/home', (req, res) => {
    res.status(200).send({
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    if (!name) {
        res.status(418).send({ message: 'We need a logo!'})
    }

    res.send({
        tshirt: `${name} your ID is ${id}`
    })
});



app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

