import { serve } from "@hono/node-server";
import { readFileSync } from "fs";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const html = readFileSync(__dirname + "/../public/index.html", "utf8");
  return c.html(html);
});

console.log("🚀 Server ready at http://localhost:3000");

serve(app);
