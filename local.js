
const port = process.env.PORT || 8080;

const server = require('./dist/apps/connect/server');

server.app.listen(port, () => {
    console.log("Listening on: http://localhost:"+port);
});
