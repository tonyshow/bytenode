require('bytenode')
var testByteNode = require('./testByteNode');
var app = module.exports = {}
app.doMain = function(){
    testByteNode.doMain();
}
app.doMain();
