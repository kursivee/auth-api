import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'router-wrap';
import './routers';

const init = () => {
    const app = express();
    app.use(bodyParser.json());
    connect(app);
    app.listen(3000, () => console.log('Example app listening on port 3000!'));
}

init();