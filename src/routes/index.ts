import { Router } from 'express';
import { someFunction } from '../common/test';

const index = Router();

/* GET home page. */
index.get('/', function(req, res, next) {

  someFunction('Yi');

  res.render('index', { title: 'Visual Studio Code!' });
});

/* GET Quick Start. */
index.get('/quickstart', function(req, res, next) {
  res.render('quickstart');
});

export default index;
