import express from 'express';
import { login, verifyToken } from './login.service';
import { register } from 'router-wrap';

const router = express.Router();

router.post('/', (req, res) => { 
    try {
        res.json(login(req.body.username, req.body.password).data);
    } catch(err) {
        res.status(err.status).send(err.data);
    }
});

router.get('/validate', (req, res) => {
    try {        
        res.json(verifyToken(req.headers.authorization).data)
    } catch(err) {
        console.log(err);
        res.status(err.status).send(err.data);
    }
});

register('/auth', router);