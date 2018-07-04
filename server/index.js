const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const messageCtrl = require('./controllers/messages_controller');

const port = 3000;
app.listen( port, () => {
    console.log(`Server is listening via port: ${port}`)
})

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

app.post('/api/messages', messageCtrl.create);
app.get('/api/messages', messageCtrl.read);
app.put('/api/messages/:id', messageCtrl.update);
app.delete('/api/messages/:id', messageCtrl.delete);

