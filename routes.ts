import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import User from "./controller.ts";
export const router = new Router();
router.get("/", User.index);
router.get("/oi", User.show);
router.post("/oi", User.store);
