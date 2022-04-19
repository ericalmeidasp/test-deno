import { Application, oakCors } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { router } from "./routes.ts";

export const app = new Application();

app.use(oakCors());
app.use(router.routes());
