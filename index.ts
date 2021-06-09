import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8000

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT} 💥`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
})

app.post('/', (req, res) => {
  console.log(req.body);
  
  wss.clients.forEach((ws: any) => {
      ws.send(JSON.stringify(req.body))
  });

  res.send('ok');
})