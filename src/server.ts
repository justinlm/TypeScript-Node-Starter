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
// import fs from "fs";

// fs.readFile("input.txt", function(err: NodeJS.ErrnoException | null, data: Buffer){
//     if(err){
//         console.log(err.stack);
//         return;
//     }
//     console.log(data.toString());
// });

// console.log("程序执行完毕");
//example 02 end=================================================================


//example 03 路由================================================================
// import http, { IncomingMessage, ServerResponse } from "http";
// import url from "url";
// import Router from "./router";

// class Start{

//     constructor(){
//         http.createServer(this.onRequest).listen(8888);
//         // 终端打印如下信息
//         console.log("Server running at http://127.0.0.1:8888/");
//     }
//     onRequest(req: IncomingMessage, res: ServerResponse) {
//         console.log("req.url:" + req.url);
//         const pathName = url.parse(req.url).pathname;
//         console.log("Request for " + pathName + " received.");

//         const _router: Router = new Router(pathName);
//         // 发送 HTTP 头部 
//         // HTTP 状态值: 200 : OK
//         // 内容类型: text/plain
//         res.writeHead(200, { "Content-type": "text/plain" });
//         // 发送响应数据 "Hello World"
//         res.end("Hello World\n");
//     }
// }

// new Start();
//example 03 end ===========================================================


//example 04 http get post =================================================
// import http, { IncomingMessage, ServerResponse } from "http";
// import querystring, { ParsedUrlQuery } from "querystring";
// const postHTML: string =
//     "<html><head><meta charset=\"utf-8\"><title> Node.js http get post</title></head>" +
//     "<body>" +
//     "<form method=\"post\">" +
//     "网站名： <input name=\"name\"><br>" +
//     "网站 URL： <input name=\"url\"><br>" +
//     "<input type=\"submit\">" +
//     "</form>" +
//     "</body></html>";

// http.createServer(function (req: IncomingMessage, res: ServerResponse) {
//     let body: string = "";
//     req.on("data", function (chunk: any) {
//         body += chunk;
//     });

//     req.on("end", function () {
//         console.log("end ==========");
//         //解析参数
//         const bodyParse: ParsedUrlQuery = querystring.parse(body);
//         //设置响应头部信息及编码
//         res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });

//         if(bodyParse.name && bodyParse.url){ //输出提交的数据
//             res.write("网站名: " + bodyParse.name);
//             res.write("<br>");
//             res.write("网站 URL: " + bodyParse.url);
//         }
//         else{ //输出表单
//             res.write(postHTML);
//         }
//         res.end();
//     });
// }).listen(3000);

//example 04 http get post end  =================================================

//example 05 web 服务器 =================================================
import http, { IncomingMessage, ServerResponse } from "http";
import fs  from "fs";
import url from "url";

//创建服务器
http.createServer(function (req: IncomingMessage, res: ServerResponse){
    //解析请求，包括文件名
    const pathName: string = url.parse(req.url).pathname;

    //输出请求文件
    console.log("Request for " + pathName + " received.");

    //从文件系统中读取请求文件内容
    fs.readFile(pathName.substr(1), function(err: NodeJS.ErrnoException, data: Buffer){
        if(err){
            console.log(err);
            res.writeHead(404, {"Content-Type": "text/html"});
        }
        else{
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8000);
// 控制台会输出以下信息
console.log("Server running at http://127.0.0.1:8000/");
//example 05 web 服务器 end =============================================

