// static node express server for serving build assets
// run like this: node server 3000; the port number has to be the 3rd argument

const express = require('express');
const app = express();
const fallback = require("express-history-api-fallback");

const root = `${__dirname}/build`;
app.use(express.static(root));

// history fallback
app.use(fallback('index.html', { root }));

let port = process.argv[2]; // get port from command line argument
app.listen(port, () => console.log(`server is listening on port ${port}`));