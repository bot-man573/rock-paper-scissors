import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const handler = async (req) => {
    return new Response("じゃんけんゲームへようこそ!", {
        headers: { "content-type": "text/html" },
    });
};

console.log("HTTP webserver running. Access it at: http://localhost:8000/");
await serve(handler, { port: 8000 });
