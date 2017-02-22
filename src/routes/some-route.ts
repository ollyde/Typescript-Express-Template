import { Router } from 'express';

const someRoute = Router();

someRoute.get('/', function(req, res, next) {
  res.send('respond with a from some route');
});

export { someRoute };
