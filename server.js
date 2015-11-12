/**
 * Created by victorzaragoza on 12/11/2015.
 */
var restify = require('restify');
var MongoClient = require('mongodb').MongoClient;

var server = restify.createServer({name: 'server'});

server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.queryParser());

var db;
var bricksCollection;

MongoClient.connect("mongodb://xworlduser:RR*tg456@ds053194.mongolab.com:53194/xxworld", function(err, dbase) {
    if(!err) {
        console.log("We are connected");
    }
    db = dbase;
    bricksCollection = db.collection('bricks', function(err, collection) {});

    server.listen(3005);

});

server.get('/bricks/:lata', function(req, res, next){
    console.log(req.params);
    res.send(200, 'ok');
});

server.post('bricks', function(req, res, next){
    var body = req.body;
    console.log(body);

    bricksCollection.insert(body);

    res.send(200, body);
});

server.put('/bricks', function(req, res, next){
   var body = req.body;
});


