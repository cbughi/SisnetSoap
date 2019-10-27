import fs from 'fs';
import { resolve } from 'path';
import app from './app';
import services from './services';

const soap = require('soap');

const xml = fs.readFileSync(resolve(__dirname, 'paymentService.wsdl'), 'utf-8');

require('dotenv').config();

app.listen(process.env.APP_PORT, () => {
  soap.listen(app, '/wsdl', services, xml);
});
