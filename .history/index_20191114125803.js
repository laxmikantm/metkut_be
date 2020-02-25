const http = require('http');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
var cors = require('cors');

const bodyParser = require('body-parser');

//Database conn test
const db = require('./sequelize/dataconnection');
db.authenticate()
  .then(() => console.log('database connected......!'))
  .catch(err => console.log('database connection error: ' + err));

var whitelist = ['http://localhost', 'http://localhost:3000','https://simplespicetradingapp.herokuapp.com/']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.options('/api/contact', cors(corsOptionsDelegate));

//for enabling parsing JSON object
//Middleware
app.use(express.json());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({

}));

const courses = [ 
  { id: 1, name: 'Course1' }, 
  { id: 2, name: 'Course2' }, 
  { id: 3, name: 'Course3' }
];

const contacts = [];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  // res.send([ 1, 2, 3 ]);
  res.send(courses);
});

app.get('/api/contact', (req, res) => {
  res.send(contacts);
})

app.get('/api/courses/:year/:month', (req, res) => {
  // res.send(req.query);
  res.status(200).send(`${req.params}:${req.params.month}`).send(req.query);
});

app.get('/api/courses/:id', (req, res) => {
  // res.send(req.params.id);
  /*
  * Every array has inbuild find method 
  */
  const a = courses.find(c => c.id === parseInt(req.params.id));
  if (!a) {
    res.status(404).send('404');
  } else {
    res.send(courses.find(c => c.id === parseInt(req.params.id)));
  }
});

app.post('/api/courses/', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(404).send('Name is required & it should be min 3 chars');
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(course);

  res.send(course);
});

app.post('/api/contact', cors(corsOptionsDelegate), (req, res) => {
  const schema = {
    headers: Joi.any().optional(),
    fullName: Joi.string().min(3).required(),
    mobileNumber: Joi.string().min(7).required(),
    email: Joi.string().email().required(),
    Address: Joi.string().min(4)
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    const JoiError = {
      error: {
        original: result.error._object
      }
    };
    res.status(404).send('Error in request sent. Details = \n', JoiError.original);
    // res.status(404).send('Error in request sent. Details = \n', JoiError.original);
    return ;
  } else {
    contacts.push(result);
    res.status(200).send('Success');
    return;
  }
});

app.put('/api/cources/:id', (req, res) => {
  //lookup the course
  //If not existing then return 404
  const a = courses.find(c => c.id === parseInt(req.params.id));
  if (!a) {
    res.status(404).send('404');
  } else {
    res.send(courses.find(c => c.id === parseInt(req.params.id)));
  }

  //Validate
  //If invalid return 400 - BAD request

  //update resource
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// const hostname = 'localhost';
// const port = 4000;

// const server = http.createServer((req, res) => {
//   console.log(req.headers);

//   console.log('request for'+ req.url+ 'by method' + req.method);

//   // if(req.method == GET) {
//   //   let fileURL;
//   //   if()
//   // }

//   // res.statusCode = 200;
//   // res.setHeader('Content-type', 'text/html');
//   // res.end('<html><body><h1>Server started </h1></body></html');
// });

// server.listen(port, hostname, () => {
//   console.log(`server running at http://${hostname}:${port}`);
// });
