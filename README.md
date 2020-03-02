npm install --save bytenode

sudo npm install -g bytenode
/usr/local/bin/bytenode -> /usr/local/lib/node_modules/bytenode/cli.js

写一个testByteNode.js脚本
var app = module.exports = {}
app.doMain = function(){
    console.log("我是加密代码");
}


bytenode --compile testByteNode.js 
删除testByteNode.js脚本