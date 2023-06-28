const Koa = require('koa');
const koaBody = require('koa-body');
const routes = require('../routes/routes.js');
const render = require('koa-ejs');
const path = require('path');
const cors = require('@koa/cors');
// const mongoose = require('mongoose');


const helloWorld = new Koa();

// mongoose.connect('mongodb://localhost:27017/koadb');

render(helloWorld, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true
});
helloWorld.use(cors());
helloWorld.use(koaBody());
helloWorld.use(routes.routes());
helloWorld.use(routes.allowedMethods());


module.exports = helloWorld;