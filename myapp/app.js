// Import modules
const express = require('express')
const Redis = require('ioredis')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// const session = require('express-session')
// const RedisStore = require('connect-redis')(session)

// Constants
var PORT = 3000;

// Create App
const app = express();

app.get('/', function (req, res) {
    console.log('你好！这是一个小例子使用了express 、 redis 、 mongoose !\n');
    res.send('你好！这是一个小例子使用了express 、 redis 、 mongoose !\n');
});

app.get('/redis',function (req,res) {
    var redis = new Redis(6379, 'redis');
    redis.set('foo', 'bar');
    redis.get('foo').then(function (result) {
        console.log("From redis: set('foo','bar'),result:" + result);
        res.send("From redis: set('foo','bar'),result:" + result);
    });
});

//test mongoose
const TestSchema = new mongoose.Schema({
    name:  String,
    version: String,
    desc: String
});
const Test = mongoose.model('Test', TestSchema);

app.get('/mongoose',function (req,res) {
    mongoose.connect('mongodb://mongodb/test', (err)=>{
        if (err) throw err;
        console.log('Mongoose connect success');
    });
    //clear
    Test.remove({},function(err, result){
        if(err) throw err;
        console.log('collection removed' + result);
    });
    //save and findOne
    setTimeout(function () {
        var entity = new Test({
            name: 'app',
            version: '1.0.0',
            desc: 'this is a demo from mongodb with mongoose.'
        });
        entity.save(function(err,result){
            if(err) throw err;
            console.log('Mongoose save success.with result:'+result);
            Test.findOne({name:'app'},function (err,result) {
                if(err) throw err;
                console.log(result);
                res.send(result);
                mongoose.connection.close();
            });
        });
    },200);
});

// Start App
app.listen(PORT || 3000);
console.log('Running app.js on http://localhost:' + PORT);
