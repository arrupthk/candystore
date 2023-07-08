const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const controller = require('./controller');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse application/json

sequelize.sync()
  .then(() => {
    console.log('Candy model synchronized with the database');
  })
  .catch((error) => {
    console.error('Failed to synchronize Candy model with the database', error);
  });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'candy.html'));
});

app.post('/candy', controller.InsertData);

app.get('/candy', controller.GetData)

app.put('/candy/:id', controller.Updatedata)

app.delete('/candy/:id', controller.DelData);


app.listen(4200, () => {
  console.log('Server is running on port 4200');
});