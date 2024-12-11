import * as mod from "https://deno.land/std@0.224.0/http/server.ts";

Deno.serve(request => {
  const url = new URL(request.url);

  if(url.pathname.startsWith("/static")) {
    return serveDir(request, { fsRoot: "./static", urlRoot: "static"});
  }

  return serveDir(request, { fsRoot: "./pages", urlRoot: ""});
});
