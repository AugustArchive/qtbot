require('dotenv').config({ path: '../.env' });
const QtClient = require('./core/client');
const { join } = require('path');

new QtClient()
    .setPrefix(process.env.PREFIX)
    .addCommandPath(join(__dirname, 'commands'))
    .addEventPath(join(__dirname, 'events'))
    .addSchedulersPath(join(__dirname, 'schedulers'))
    .bootup();