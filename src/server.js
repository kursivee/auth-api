import express from 'express';
import bodyParser from 'body-parser';
import routers from './routers';
import { connectRouters } from './util/router.utils';

const init = () => {
    const app = express();
    app.use(bodyParser.json());
    connectRouters(app)(routers);
    app.listen(3000, () => console.log('Example app listening on port 3000!'));
}

init();