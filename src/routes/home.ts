import { Router } from 'express';
import { someFunction } from '../common/test';

const home = Router();

/* GET home page. */
home.get('/', function(req, res, next) {
  res.render('index', { title: 'Visual Studio Code!' });
});

/* GET Quick Start. */
home.get('/quickstart', function(req, res, next) {
  res.render('quickstart');
});

export default home;
