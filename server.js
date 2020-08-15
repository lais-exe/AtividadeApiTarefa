const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Tarefa = require('./src/model/tarefaModel');
const app = express();
port = process.env.PORT || 3000

const app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const routes = require('./src/routes/tarefaRoute');
routes(app);

app.listen(port);

console.log('API em funcionamento');
