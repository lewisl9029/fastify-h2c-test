import * as fastify_ from "fastify";
import * as fs_ from "fs";

const fastify = fastify_.default({
  logger: true,
});

const index = fs_.promises.readFile("./index.html");

fastify.get("/", async (request, response) => {
  response.headers({
    "content-type": "text/html",
  });

  return index;
});

fastify.get("/noop", () => "hi");
(async () => {
  try {
    await fastify.listen(58080, "::");
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
