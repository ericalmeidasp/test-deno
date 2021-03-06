import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { Users, Books } from "./controllers/index.ts";
export const router = new Router();

router.get("/", (ctx) => {ctx.response.body = {msg: 'hello'}});

router.get("/users", Users.show);

router.get("/books", Books.index);
router.get("/books/:id", Books.show);