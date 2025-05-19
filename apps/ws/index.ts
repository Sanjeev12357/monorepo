import {prismaClient} from "db/client";

Bun.serve({
    port:8081,
    fetch(req,server){
        if(server.upgrade(req)){
            return ;
        }
        return new Response("Hello World",{
            status: 200,    });
    },
    websocket:{
        message(ws,message){
            prismaClient.user.create({
                data:{
                    username:Math.random().toString(),
                    password:Math.random().toString()
                }
            })
            ws.send(message);
        }
    }

})