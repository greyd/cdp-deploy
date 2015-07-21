var app = require('../app'),
    assert = require('assert'),
    http = require('http');
var request = require('supertest');

describe('GET /', function(){
    it('should return a 200 status code', function (done){
        request(app)
            .get('/')
            .expect(200, done);
    });
});
describe('GET /not-exists', function(){
    it('should return a 404 status code', function (done){
        request(app)
            .get('/not-exists')
            .expect(404, done);
    });
});



/*
describe('GET /', function(){

    it('should return a 200 status code', function (done){
        http.get({ host: '0.0.0.0', port: 3000 }, function(res) {
            assert.deepEqual(res.statusCode, 200)
            done();
        }).on('error', function(e) {
            throw new Error(e);
        });
    });

});*/
