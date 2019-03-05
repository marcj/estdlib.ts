import * as express from 'express';

const app = express();
const port = 80;

app.use(express.static('../packages/estdlib/docs'));
app.use('/rxjs', express.static('../packages/estdlib-rxjs/docs'));

app.listen(port, () => console.log(`App listening on port ${port}!`))
