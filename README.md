# Dumper

A simple logging tool

`npm install`

`npm run start`

Go to http://localhost:8000 on your browser.

If you want to use a different port create a `.env` file with the following content:
```
PORT=[your port]
```

Use curl to dump some content to the dumper:

`curl --request POST --data 'test' http://localhost:8000`

In PHP use Guzzle to dump some value:

```
(new GuzzleHttp\Client(['base_uri' => 'http://<your ip address>:8000']))->post('/', ['json' => $value]);
```
