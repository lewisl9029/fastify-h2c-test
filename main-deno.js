import { serve } from "https://deno.land/std@0.121.0/http/server.ts";

const handler = async (request) => {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    return new Response(await Deno.readTextFile("./index.html"), {
      status: 200,
      headers: {
        "content-type": "text/html",
      },
    });
  }

  if (url.pathname === "/noop") {
    return new Response("hi");
  }
};

serve(handler, { port: 58080 });
