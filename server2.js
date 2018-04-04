var http = require("http");
function start(){
    function onRequest(request, response){
        console.log("Resquest received.");
        response.writeHead(200, {"Content-Type":"plain"});
        response.write("Hello world");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}
exports.start = start;