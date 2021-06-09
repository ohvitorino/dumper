# Dumper

A simple logging tool

`npm install`
`npm run start`

Head to http://localhost:8000

Use curl to dump some content to the dumper

`curl --request POST --data 'test' http://localhost:8000`

In PHP use Guzzle to dump some string

```
(new GuzzleHttp\Client(['base_uri' => 'http://localhost:8000']))->post('/', ['json' => $value]);
```
