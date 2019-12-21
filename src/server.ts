// import errorHandler from "errorhandler";

// import app from "./app";

// /**
//  * Error Handler. Provides full stack - remove for production
//  */
// app.use(errorHandler());

// /**
//  * Start Express server.
//  */
// const server = app.listen(app.get("port"), () => {
//     console.log(
//         "  App is running at http://localhost:%d in %s mode",
//         app.get("port"),
//         app.get("env")
//     );
//     console.log("  Press CTRL-C to stop\n");
// });

// export default server;


//example 01 begin=================================================================
// import http, { IncomingMessage, ServerResponse } from "http";

// http.createServer(function(req: IncomingMessage, res: ServerResponse){
//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     res.writeHead(200, {"Content-type":"text/plain"});

//     // 发送响应数据 "Hello World"
//     res.end("Hello World\n");
// }).listen(8888);

// // 终端打印如下信息
// console.log("Server running at http://127.0.0.1:8888/");

//example 01 end=================================================================

//example 02 begin=================================================================
import fs from "fs";

fs.readFile("input.txt", function(err: NodeJS.ErrnoException | null, data: Buffer){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log("程序执行完毕");
//example 02 end=================================================================